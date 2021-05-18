const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();
const Users = require('./models/Users.js');

const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect('mongodb://localhost:27017/business', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongodb is connected!');
});

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Welcome to PICKNIC back end!');
});

app.get('/yelp', (req, res) => {
  // for landing page, use location=seattle
  axios({
    method: 'get',
    url: `${process.env.YELP_BUSINESS_ENDPOINT}/search?location=seattle`,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      'content-type': 'application/json'
    }
  }).then(response => res.json(response.data.businesses))
    .catch(error => console.log(error))
})

// handle search by location and keyword
app.get('/businesses/search', (req, res) => {
  const location = req.query.location;
  const term = req.query.term;
  axios({
    method: 'get',
    url: `${process.env.YELP_BUSINESS_ENDPOINT}/search?location=${location}&term=${term}`,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      'content-type': 'application/json'
    }
  }).then(response => res.json(response.data.businesses))
    .catch(error => console.log(error))
})

app.get('/business/:id', (req, res) => {
  const id = req.params.id;
  axios({
    method: 'get',
    url: `${process.env.YELP_BUSINESS_ENDPOINT}/${id}`,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      'content-type': 'application/json'
    }
  }).then(response => {
    res.json(response.data)
  })
    .catch(error => console.log(error))
})

// post route to add business to specific user
app.post('/business', (req, res) => {
  const user = req.body;
  Users.find({ user: user.email }, (err, userData) => {
    if (err) {
      res.send(err);
    } else if (userData.length < 1) {
      // if the user not found, then save the whole data
      const newUser = new Users({
        email: user.email,
        businesses: [user.business]
      });
      newUser.save()
        .then(newUserData => {
          res.json(newUserData);
        })
        .catch(err => {
          res.status(500).send(err);
        })
    } else {
      // if the user found, then only push the business in the businesses property
    }
  })
})
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
