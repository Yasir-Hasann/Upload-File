const express = require('express');
const multer = require('multer');
const { uploadFile } = require('../controllers/upload-file');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.route('/').post(upload.single('file'), uploadFile);

module.exports = router;
