const fs = require("fs").promises;
const { json } = require("body-parser");
const {
  internalServerError,
  InvalidBookId,
  InvalidBookData,
} = require("../handlers/errors");

const path = require("path");
const filePath = path.join(__dirname, "books.json");

// get all books
exports.getAllBooks = async (req, res) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return res.status(200).json({
      message: "All books are fetched successfully.",
      data: JSON.parse(data),
    });
  } catch (error) {
    return internalServerError(res, error);
  }
};

// get book by id
exports.getBookById = async (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  if (isNaN(bookId)) return InvalidBookId;

  try {
    const data = await fs.readFile(filePath, "utf8");
    const found = JSON.parse(data).filter((item) => item.id === bookId);
    if (!found) return InvalidBookId;
    return res.status(200).json({
      message: `Book with provided ${bookId} is fetched successfully`,
      data: found
    });
  } catch (err) {
    return internalServerError(res, err);
  }
};

// post request
exports.createBook = async (req, res) => {
  const { body: newBook } = req;

  if (!newBook || typeof newBook !== "object") return InvalidBookData;

  try {
    const data = await fs.readFile(filePath, "utf-8");
    const books = JSON.parse(data);
    newBook.id = Math.max(...books.map((a) => a.id), 0) + 1;
    books.push(newBook);
    const newData = JSON.stringify(books);

    await fs.writeFile(filePath, newData);
    res.send("The book has been added successfully!");
  } catch (err) {
    return internalServerError(res, err);
  }
};

// update book
exports.updateBook = async (req, res) => {
  const { body: updateBook } = req;

  if (!updateBook || typeof updateBook !== "object") return InvalidBookData;

  try {
    const data = await fs.readFile(filePath, "utf-8");
    let books = JSON.parse(data);
    books = books.map((book) =>
      book.id === updateBook.id ? updateBook : book
    );

    await fs.writeFile(filePath, JSON.stringify(books));
    res.json("Book has been updated successfully!");
  } catch (err) {
    return internalServerError(res, err);
  }
};

// delete book
exports.deleteBook = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) return InvalidBookId;

  try {
    const data = await fs.readFile(filePath, "utf-8");
    const books = JSON.parse(data);

    const bookToDelete = books.find((book) => book.id === id);
    if (!bookToDelete) {
      return res.status(404).json({ error: `Book with ID ${id} not found` });
    }
    const filteredBooks = books.filter((book) => book.id !== id);

    await fs.writeFile(filePath, JSON.stringify(filteredBooks));

    res.json({ message: `Deleted the Book with the id of ${id}` });
  } catch (err) {
    return internalServerError(res, err);
  }
};
