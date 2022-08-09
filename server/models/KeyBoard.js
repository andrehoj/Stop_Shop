const { Schema, model } = require("mongoose");

const keyboardSchema = new Schema({
  name: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  images: [{ type: String }],
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  review: {
    type: Number,
  },
  price: {
    type: Number,
    require: true,
  },
  wireless: {
    type: Boolean,
  },
  inStock: {
    type: Boolean,
  },
});

const Keyboard = model("Keyboard", keyboardSchema);

module.exports = Keyboard;
