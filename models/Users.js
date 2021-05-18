const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  id: String,
  name: String,
  phone: String,
  rating: Number,
});

const userSchema = new mongoose.Schema({
  email: String,
  businesses: [businessSchema]
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;
