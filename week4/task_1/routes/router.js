const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");
const { signup, login } = require("../controllers/users");

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

router.post("/auth/signup", signup);
router.post("/auth/login", login);

module.exports = router;
