const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  id: String,
  name: String,
  phone: String,
  rating: Number,
  image_url: String,
  is_claimed: Boolean,
  is_closed: Boolean,
  price: String,
  url: String,
  location: {
    address1: String,
    address2: String,
    address3: String,
    city: String,
    country: String,
    cross_streets: String,
    display_address: [String],
    state: String,
    zip_code: String
  }

});

const userSchema = new mongoose.Schema({
  email: String,
  businesses: [businessSchema]
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;
