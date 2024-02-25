const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const validation = [
  check("name")
    .isAlpha()
    .withMessage("Name must only contain alphabetical characters"),
  check("age").isNumeric().withMessage("Invalid age format."),
];
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", validation, createUser);
router.put("/users/:id", validation, updateUser);
router.delete("/users/:id", deleteUser);
module.exports = router;
