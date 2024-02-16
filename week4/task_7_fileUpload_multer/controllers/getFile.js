const fs = require('fs').promises;

const filePath = `${__dirname}/../filenames.json`;
// console.log(filePath);

const getFile = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    const data = await fs.readFile(filePath, 'utf-8');
    const allFileData = JSON.parse(data);

    const idFile = allFileData.find((file) => file.fileId === id);

    if (!idFile) {
      return res.status(404).json({
        Error: 'FileId not found',
      });
    }

    res.status(200).json(idFile);
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

module.exports = getFile;
