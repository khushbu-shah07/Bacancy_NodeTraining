const fs = require("fs").promises;
const crypto = require("crypto");
const internalError = require("../handlers/error");
const { validationResult } = require("express-validator");
const filePath = `${__dirname}/../users.json`;
// console.log(filePath);

exports.getAllUsers = async (req, res) => {
  try {
    const users = await fs.readFile(filePath, "utf-8");
    // console.log("users: ", JSON.parse(users));
    return res.status(200).send({
      success: true,
      message: "All user data fetched successfully",
      data: JSON.parse(users),
    });
  } catch (error) {
    return internalError(res, error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    let users = await fs.readFile(filePath, "utf-8");
    users = JSON.parse(users);
    filteredUser = users.filter((user) => user.id === req.params.id);
    // console.log(users);
    if (!filteredUser.length) {
      return res
        .status(404)
        .json({ success: false, error: "User with provided Id not found" });
    }
    return res.status(200).json({
      success: true,
      message: "User with provided Id fetched successfully",
      data: filteredUser[0],
    });
  } catch (error) {
    return internalError(res, error);
  }
};

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  try {
    const id = crypto.randomUUID();
    let users = await fs.readFile(filePath, "utf-8");
    users = JSON.parse(users);

    const existingUser = users.find((user) => user.id === id);
    if (existingUser) {
      // ID already exists, generate a new one
      return res.status(400).json({
        success: false,
        error: "ID already exists",
      });
    }
    const newUser = { id, ...req.body };
    users.push(newUser);

    await fs.writeFile(filePath, JSON.stringify(users));
    return res.status(201).json({
      success: true,
      message: "User successfully created",
      data: newUser,
    });
  } catch (error) {
    return internalError(res, error);
  }
};

exports.updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  try {
    let users = await fs.readFile(filePath, "utf-8");
    users = JSON.parse(users);

    users = users.map((user) => {
      if (user.id === req.params.id) {
        user = { ...req.body, ...user };
        // user = { id: user.id, ...req.body };
        return user;
      }
      return user;
    });

    await fs.writeFile(filePath, JSON.stringify(users));
    return res
      .status(201)
      .json({ success: true, message: "Userdata successfully updated" });
  } catch (error) {
    return internalError(res, error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let users = await fs.readFile(filePath, "utf-8");
    users = JSON.parse(users);

    filteredUsers = users.filter((user) => user.id !== req.params.id);
    if (filteredUsers.length === users.length) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    await fs.writeFile(filePath, JSON.stringify(filteredUsers));
    return res
      .status(201)
      .json({ success: true, message: "User successfully deleted" });
  } catch (error) {
    return internalError(res, error);
  }
};
