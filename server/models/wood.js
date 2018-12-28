const mongoose = require('mongoose');

const woodSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
    maxLength: 100
  }
});

const Wood = mongoose.model('Wood', woodSchema);

module.exports = {Wood};
