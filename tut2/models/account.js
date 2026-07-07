const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: 'accounts',
  },
);

module.exports = mongoose.model('Account', AccountSchema);
