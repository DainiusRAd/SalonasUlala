const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
