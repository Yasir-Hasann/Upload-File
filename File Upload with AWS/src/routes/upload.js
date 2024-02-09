const express = require('express');
const multer = require('multer');
const { uploadV2, uploadV3 } = require('../controllers/upload-file');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/1", upload.single('file'), uploadV2);
router.post("/2", upload.single('file'), uploadV3);

module.exports = router;
