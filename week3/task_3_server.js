/* eslint-disable no-console */
/* eslint-disable brace-style */
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  // GET Request
  if (req.method === 'GET' && req.url === '/book/getallbooks') {
    fs.readFile('./book.json', 'utf-8', (err, result) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end(`Error: ${err}`);
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    });
  } else if (req.method === 'GET' && req.url.startsWith('/book/get/')) {
    const id = parseInt(req.url.split('/')[3], 10);
    fs.readFile('./book.json', 'utf-8', (err, result) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Something went wrong!');
      } else {
        const found = JSON.parse(result).find((item) => item.id === id);
        // console.log(found);
        if (found) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(JSON.stringify(found));
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Error: Book not found');
        }
      }
    });
  } // POST /CREATE
  else if (req.method === 'POST' && req.url === '/book/create') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const newBook = JSON.parse(body);
      //    console.log(newBook);
      if (!newBook || newBook === undefined) {
        return res.writeHead(400, { 'Content-Type': 'text/plain' }).end('Missing data! Please provide valid book details');
      }
      fs.readFile('./book.json', 'utf-8', (err, result) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Something went wrong!');
        } else {
          const books = JSON.parse(result);
          // console.log(books);
          newBook.id = books.length + 1; // correction needed
          books.push(newBook);
          fs.writeFile('./book.json', JSON.stringify(books), (error) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Error writing file');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              res.end(JSON.stringify(newBook));
            }
          });
        }
      });
    });
  } // PUT /UPDATE
  else if (req.method === 'PUT' && req.url === '/book/update') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const updateBook = JSON.parse(body);
      fs.readFile('./book.json', 'utf-8', (err, result) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Something went wrong!');
        } else {
          let books = JSON.parse(result);
          books = books.map((book) => {
            if (book.id === parseInt(updateBook.id, 10)) {
              book = updateBook;
            }
            return book;
          });
          fs.writeFile('./book.json', JSON.stringify(books), (error) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Something went wrong!');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              res.end('Book has been updated successfully!');
            }
          });
        }
      });
    });
  }
  // Delete
  else if (req.method === 'DELETE' && req.url.startsWith('/book/delete/')) {
    const id = req.url.split('/')[3];
    if (id === undefined || !id || id === '') {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Please provide a valid book id');
      return;
    }
    fs.readFile('./book.json', 'utf8', (err, result) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Something went wrong!');
      } else {
        const booksdata = JSON.parse(result).filter((item) => item.id.toString() !== id);
        fs.writeFile('./book.json', JSON.stringify(booksdata), (error) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Error deleting the book ${err}`);
          } else res.end('Book has been deleted successfully!');
        });
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  console.log('Listening on the port 3000');
});
