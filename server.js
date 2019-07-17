const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');

// database connection
mongoose.connect('mongodb://localhost/SFspotsDB', { useNewUrlParser: true })
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


// test Api call for a single photo:
//`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=cafe%20enchante&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${apiKey}`

// test api:
server.get('/test', (req, res) => {
  res.json('API is running');
})

// Get the first photo:
server.get('/', (req, res) => {

})



const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n === API up on port ${port} === \n`);
});