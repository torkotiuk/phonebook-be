const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();
const { DB_HOST, PORT = 5000 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/products', routes.products);

mongoose
  .connect(DB_HOST, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DataBase was connected successfully');
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch(error => console.log(error));
