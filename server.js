const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const spotsController = require('./routes/SFspotsController');

// local database connection: (replace those lines to switch)
// mongoose.connect('mongodb://localhost/SFspotsDB', { useNewUrlParser: true })

// string path to connect to remote database:
const dataBase = process.env.DBuri;

// remote database connection:
mongoose.connect(dataBase, { useNewUrlParser: true })
  .then(mongo => {
    console.log("\n === connected to 'SFspotsDB' database")
  })
  .catch(err => {
    console.log('error connecting to mongdo', err);
  });

// server instantiation
const server = express();
server.use(helmet());
server.use(express.json());

// prevent CORS errors
server.use(cors());

//attemp to fix
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// test api:
server.get('/', (req, res) => {
  res.json('API is running');
})

server.use('/api/spots', spotsController);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n === API up on port ${port} === \n`);
});