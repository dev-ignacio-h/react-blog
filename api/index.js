const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log('pasoooooooooooooooooooo'));

app.listen('5000', () => {
  console.log('Backend is running');
});
