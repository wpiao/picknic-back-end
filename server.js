const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

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

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
