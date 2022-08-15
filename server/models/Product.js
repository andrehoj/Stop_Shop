const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  title: {
    type: String,
  },

  image: {
    type: String,
  },

  description: {
    type: String,
  },

  category: {
    type: String,
  },

  rating: {
    rate: String,
    count: String,
  },

  price: {
    type: Number,
    require: true,
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
