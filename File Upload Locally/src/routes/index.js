const express = require('express');
const uploadRouter = require('./upload');

const apiRouter = express.Router();

apiRouter.use('/upload', uploadRouter);

module.exports = apiRouter;