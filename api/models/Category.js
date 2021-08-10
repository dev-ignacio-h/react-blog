const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: True
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', CategorySchema);
