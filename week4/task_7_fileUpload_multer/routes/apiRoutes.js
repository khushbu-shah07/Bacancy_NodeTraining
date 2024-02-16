const express = require('express');
const multer = require('../config/multer');
const getFile = require('../controllers/getFile');
const uploadFile = require('../controllers/uploadFile');

const router = express.Router();

router.post('/uploads', multer.single('file'), uploadFile);
router.get('/file/:id', getFile);

module.exports = router;
