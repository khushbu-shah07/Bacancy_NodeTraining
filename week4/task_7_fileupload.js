/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const filePath = path.join(__dirname, 'filenames.json');

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    // function(req, file, cb) {
    //     cb(null, 'uploads/')
    // },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});



app.post('/api/v1/uploads', upload.single('file'), (req, res) => {
  const fileId = Math.floor(Math.random() * 1000) + 1;
  const fileName = req.file.filename; // uploaded filename

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({
        Error: err,
      });
    }
    allFileData = JSON.parse(data);
    console.log(allFileData);
    allFileData.push({ fileId, fileName, date: new Date() });
    fs.writeFile(filePath, JSON.stringify(allFileData), (error) => {
      if (error) {
        return res.status(500).json({
          Error: error,
        });
      }
      return res.status(200).json({
        message: 'File has been uploaded sucessfully. Check the data in filenames.json to see the uploaded file.',
      });
    });
  });
});


app.get('/api/v1/file/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({
        Error: err,
      });
    }

    allFileData = JSON.parse(data);
    const Idfile = allFileData.filter((file) => file.fileId === id);
    // console.log(Idfile);
    if (!Idfile) {
      return res.status(404).json({
        Error: 'FileId not found',
      });
    }
    return res.status(200).send(Idfile);
  });
});


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
