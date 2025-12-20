const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Appetizers', 'Main Courses', 'Wood-Fired Pizza', 'Desserts']
  },
  available: {
    type: Boolean,
    default: true
  },
  image: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
