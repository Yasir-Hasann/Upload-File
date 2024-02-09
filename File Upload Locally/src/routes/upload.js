const express = require('express');
const { upload } = require('../middlewares/upload');
const { uploadFile } = require('../controllers/upload-file');
const router = express.Router();

router.route('/').post(upload.single('file'), uploadFile);

module.exports = router;