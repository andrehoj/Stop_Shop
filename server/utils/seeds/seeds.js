const mongoose = require("mongoose");
const db = require("../../config/connection");
const { Product, User } = require("../../models/index");
const fetch = require("node-fetch");

db.once("open", () => {
  fetch("https://fakestoreapi.com/products?limit=50")
    .then((res) => {
      return res.json();
    })
    .then((products) => {
      mongoose
        .connect(
          process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/MERN_Products",
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )
        .then(() => {
          console.log("MONGODB seeding process started!");
          seedDB().then(() => {
            mongoose.connection.close();
          });
        })
        .catch((err) => {
          console.log(err);
        });

      async function seedDB() {
        await Product.deleteMany();
        await User.deleteMany();

        await Product.insertMany(products);
        await User.insertMany([
          {
            firstName: "Andrew",
            lastName: "Howran",
            email: "andrew@gmail.com",
            password: "mya",
          },

          {
            firstName: "Brianna",
            lastName: "Howran",
            email: "briannabanana@gmail.com",
            password: "ginger",
          },

          {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@gmail.com",
            password: "password",
          },
        ]);
      }
    });
});
