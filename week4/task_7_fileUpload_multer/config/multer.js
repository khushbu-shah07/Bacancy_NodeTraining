const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename(req, file, cb) {
      cb(null, `${file.originalname}-${Date.now()}`);
    },
  }),
});

module.exports = upload;
