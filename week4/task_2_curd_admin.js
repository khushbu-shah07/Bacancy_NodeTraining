/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(bodyParser.json()); // for parsing application/json
const PORT = 3000;

const filePath = `${__dirname}/../week3/books.json`;

const adminMiddleware = (req, res, next) => {
  const { role } = req.headers;
  if (role && role === 'admin') return next();
  res.status(403).send({ error: 'Access denied! You are not an admin' });
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminMiddleware);

app.get('/', (req, res) => {
  res.send('Welcome to Book Store');
});

// get all books
app.get('/api/v1/books/getallbooks', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) res.status(500).send('Internal Server Error');
    res.send(JSON.parse(data));
  });
});

// get a book by id
app.get('/api/v1/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  // console.log(bookId)
  if (!bookId) return res.status(400).send('Invalid ID! Please provide valid BookId');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) res.status(500).send('Internal Server Error');
    const found = JSON.parse(data).find((item) => item.id === bookId);
    if (!found) return res.status(404).send('The book was not found');
    return res.send(found);
  });
});

// create book i.e add book
app.post('/api/v1/books/addBook', (req, res) => {
  const { body: newBook } = req;
  // let newBook = { "id":req.body.id, "title": req.body.title, "author": req.body.author};
  // console.log(newBook);

  if (!newBook || typeof newBook !== 'object') return res.status(400).send('Invalid book data.');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) res.status(500).send('Internal Server Error');
    const books = JSON.parse(data);
    newBook.id = Math.max(...books.map((a) => a.id), 0) + 1;
    books.push(newBook);
    const newData = JSON.stringify(books);

    fs.writeFile(filePath, newData, (error) => {
      if (error) res.status(500).send('Internal Server Error');
      res.end('The book has been added successfully!');
    });
  });
});

//  update book details
app.put('/api/v1/books/updateBook', (req, res) => {
  const { body: updateBook } = req;
  // console.log(updateBook);

  if (!updateBook || typeof updateBook !== 'object') return res.status(400).send('Invalid book data.');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;

    let books = JSON.parse(data);
    books = books.map((book) => {
      if (book.id === updateBook.id) {
        book = updateBook;
        return { ...book, ...updateBook };
      }
    });

    fs.writeFile(filePath, JSON.stringify(books), (error) => {
      if (error) res.status(500).send('Internal Server Error');
      res.json('Book has been updated Successfully!');
    });
  });
});

// delete a book
app.delete('/api/v1/books/deleteBook/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!id) return res.status(400).send('Invalid ID! Please provide valid BookId');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) res.status(500).send('Internal Server Error');
    const books = JSON.parse(data).filter((book) => book.id !== id);
    fs.writeFile(filePath, JSON.stringify(books), (error) => {
      if (error) res.status(500).send('Internal Server Error');
      res.send(`Deleted the Book with the id of ${id}`);
    });
  });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
