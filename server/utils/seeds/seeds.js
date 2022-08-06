const mongoose = require("mongoose");
const { Keyboard, User } = require("../../models/index");

mongoose
  .connect("mongodb://127.0.0.1:27017/Key_Boards", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGODB seeding process started!");
  })
  .catch((err) => {
    console.log(err);
  });

const seedDB = async () => {
  await Keyboard.deleteMany();
  await User.deleteMany();

  const keyboards = await Keyboard.insertMany([
    {
      name: "K400 PLUS WIRELESS TOUCH KEYBOARD",
      coverImage: "k400-plus/k400-plus-wireless-cover.webp",
      images: [
        "k400-plus/k400-plus-gallery-1.webp",
        "k400-plus/k400-plus-gallery-2.webp",
        "k400-plus/k400-plus-gallery-3.webp",
      ],
      description: "Relaxed wireless control of your PC connected TV",
      brand: "Logitech",
      review: 4,
      wireless: true,
      inStock: true,
      price: 49.99,
    },
    {
      name: "MX MECHANICAL",
      coverImage: "mx-mechanical/mx-mechanical-keyboard-cover.webp",
      images: [
        "mx-mechanical/mx-mechanical-keyboard-gallery-1.webp",
        "mx-mechanical/mx-mechanical-keyboard-gallery-2.webp",
        "mx-mechanical/mx-mechanical-keyboard-gallery-3.webp",
      ],
      description: "Wireless Illuminated Performance Keyboard",
      brand: "Logitech",
      review: 5,
      wireless: true,
      inStock: true,
      price: 199.99,
    },
    {
      name: "ERGO K860",
      coverImage: "ergo-k860/ergo-k860-cover.webp",
      images: [
        "ergo-k860/ergo-k860-gallery-1",
        "ergo-k860/ergo-k860-gallery-2",
        "ergo-k860/ergo-k860-gallery-3",
      ],
      description: "Split Ergonomic Keyboard",
      brand: "Logitech",
      review: 4,
      wireless: true,
      inStock: true,
      price: 149.99,
    },
    {
      name: " KEYCHRON K2 WIRELESS MECHANICAL KEYBOARD",
      coverImage: "keychron-k2/keychron-k2-cover.png",
      images: [],
      description:
        "K2 is a super tactile wireless or wired keyboard giving you all the keys and function you need while keeping it compact, with the largest battery seen in a mechanical keyboard.",
      brand: "Keychron",
      review: 5,
      wireless: true,
      inStock: true,
      price: 79.99,
    },
    {
      name: "Keychron K10 Wireless Mechanical Keyboard",
      coverImage: "keychron-k10/keychron-k10-cover.webp",
      images: [],
      description:
        "Connects with up to 3 devices via Bluetooth and switch among them easily. With high reliable and broad compatibility Broadcom Bluetooth 5.1 chipset, the K10 is best to fit home, office and light gaming use while connecting with your smartphone, laptop and iPad.",
      brand: "Keychron",
      review: 5,
      wireless: true,
      inStock: true,
      price: 94.99,
    },
  ]);

  await User.insertMany([
    {
      firstName: "Andrew",
      lastName: "Howran",
      email: "andrewhowran@gmail.com",
      password: "bailey",
    },

    {
      firstName: "Brianna",
      lastName: "Howran",
      email: "briannabannana@gmail.com",
      password: "ginger",
    },

    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      password: "password",
    },
  ]);
};

seedDB().then(() => {
  mongoose.connection.close();
});
