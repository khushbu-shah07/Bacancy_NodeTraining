const jwt = require("jsonwebtoken");
const fs = require("fs").promises;
const { internalServerError } = require("../handlers/errors");

const secretKey = "API";
const path = require("path");
const userPath = path.join(__dirname, "users.json");

// sign-up
exports.signup = async (req, res) => {
  try {
    const { body } = req;
    if (
      !body ||
      typeof body !== "object" ||
      !body.username ||
      !body.email ||
      !body.password
    ) {
      return res.status(400).json({
        Error: "Please provide all the valid field details",
      });
    }

    const data = await fs.readFile(userPath, "utf-8");
    let users = JSON.parse(data);

    const alreadyExists = users.filter((user) => user.email === body.email);

    if (alreadyExists > 0) {
      return res.status(409).json({
        Error: "Account already exists with this emailId/ user already exists",
      });
    }

    users.push(body);

    await fs.writeFile(userPath, JSON.stringify(users));

    res.status(200).json({
      msg: "New user registered successfully",
      user: body,
    });
  } catch (error) {
    return internalServerError(res, error);
  }
};

// sign-in
exports.login = async (req, res) => {
  try {
    const { body } = req;
    if (
      !body ||
      typeof body !== "object" ||
      !body.username ||
      !body.email ||
      !body.password
    ) {
      return res.status(400).json({
        Error: "Please provide all the valid field details",
      });
    }

    const data = await fs.readFile(userPath, "utf-8");
    const users = JSON.parse(data);

    const alreadyExists = users.filter((user) => user.email === body.email);

    if (!alreadyExists || alreadyExists.length === 0) {
      return res.status(401).json({
        Error: `User does not exist`,
      });
    }

    if (alreadyExists[0].password !== body.password) {
      return res.status(403).json({
        Error: `Invalid Password`,
      });
    }

    let token = jwt.sign({ username: alreadyExists[0].username }, secretKey, {
      expiresIn: "30d",
    });

    return res.status(200).json({
      data: body,
      token: token,
      msg: "User logged in successfully",
    });
  } catch (error) {
    return internalServerError(res, error);
  }
};
