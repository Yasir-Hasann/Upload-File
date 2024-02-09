const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRouter = require('./routes');

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/public/', express.static(path.join('public/')));


app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
