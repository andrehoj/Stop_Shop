const { Schema, model } = require("mongoose");
const keyBoardSchema = require("./KeyBoard");

const userSchema = new Schema({
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
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  favouriteKeyBoards: [keyBoardSchema],
});

const User = model("User", userSchema);

module.exports = User;
