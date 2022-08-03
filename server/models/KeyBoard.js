const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const keyBoardSchema = new Schema({
  name: {
    type: String,
  },
  coverImage: {
    type: String,
  },
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
    type: Decimal128,
    require: true,
  },
});

module.exports = keyBoardSchema;
