const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();
require('./settings/passport-config');
const { DB_HOST, PORT = 5000 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/contacts', routes.contacts);
app.use('/api/v1/users', routes.users);
app.use('/api/v1/auth', routes.auth);
app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});
app.use((error, _, res, __) => {
  const { code = 500, message = 'server error' } = error;

  res.status(code).json({
    status: 'fail',
    code,
    message,
  });
});

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
