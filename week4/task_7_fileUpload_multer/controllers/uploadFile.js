const fs = require('fs').promises;

const filePath = `${__dirname}/../filenames.json`;
// const filePath = path.join(__dirname, '../filenames.json/');
// console.log(filePath);

const uploadFile = async (req, res) => {
  try {
    const fileId = Math.floor(Math.random() * 1000) + 1;
    const fileName = req.file.filename;

    const data = await fs.readFile(filePath, 'utf-8');
    const allFileData = JSON.parse(data);
    allFileData.push({ fileId, fileName, date: new Date() });

    await fs.writeFile(filePath, JSON.stringify(allFileData));

    res.status(200).json({
      message: 'File has been uploaded successfully. Check the data in filenames.json to see the uploaded file.',
    });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

module.exports = uploadFile;
