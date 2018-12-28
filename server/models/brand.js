const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
    maxLength: 100
  }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = {Brand};
