const mongoose = require("mongoose");
const { Product, User } = require("../../models/index");
const fetch = require("node-fetch");

fetch("https://fakestoreapi.com/products?limit=50")
  .then((res) => {
    return res.json();
  })
  .then((products) => {
    mongoose
      .connect( process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/MERN_Products", {
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
      await Product.deleteMany();
      await User.deleteMany();

      await Product.insertMany(products);
      await User.insertMany([
        {
          firstName: "Andrew",
          lastName: "Howran",
          email: "ahole@gmail.com",
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
    };

    seedDB().then(() => {
      mongoose.connection.close();
    });
  });

// })
// .catch(function handleError(error) {
//   console.log("Error" + error);
// });

// fetch("https://fakestoreapi.com/products/1").then((res) => {
//   res.json().then((data) => {
//     console.log(data);
//   });
// });

// const seedDB = async () => {
//   await Product.deleteMany();
//   await User.deleteMany();

//   const Products = await Product.insertMany([
//     {
//       name: "K400 PLUS WIRELESS TOUCH Product",
//       coverImage: "k400-plus/k400-plus-wireless-cover.webp",
//       images: [
//         "k400-plus/k400-plus-wireless-gallery-1.webp",
//         "k400-plus/k400-plus-wireless-gallery-2.webp",
//         "k400-plus/k400-plus-wireless-gallery-3.webp",
//       ],
//       description: "Relaxed wireless control of your PC connected TV",
//       brand: "Logitech",
//       review: 4,
//       wireless: true,
//       inStock: true,
//       price: 49.99,
//     },
//     {
//       name: "MX MECHANICAL",
//       coverImage: "mx-mechanical/mx-mechanical-Product-cover.webp",
//       images: [
//         "mx-mechanical/mx-mechanical-Product-gallery-1.webp",
//         "mx-mechanical/mx-mechanical-Product-gallery-2.webp",
//         "mx-mechanical/mx-mechanical-Product-gallery-3.webp",
//       ],
//       description: "Wireless Illuminated Performance Product",
//       brand: "Logitech",
//       review: 5,
//       wireless: true,
//       inStock: true,
//       price: 199.99,
//     },
//     {
//       name: "ERGO K860",
//       coverImage: "ergo-k860/ergo-k860-cover.webp",
//       images: [
//         "ergo-k860/ergo-k860-gallery-1.webp",
//         "ergo-k860/ergo-k860-gallery-2.webp",
//         "ergo-k860/ergo-k860-gallery-3.webp",
//       ],
//       description: "Split Ergonomic Product",
//       brand: "Logitech",
//       review: 4,
//       wireless: true,
//       inStock: true,
//       price: 149.99,
//     },
//     {
//       name: " KEYCHRON K2 WIRELESS MECHANICAL Product",
//       coverImage: "keychron-k2/keychron-k2-cover.png",
//       images: [],
//       description:
//         "K2 is a super tactile wireless or wired Product giving you all the keys and function you need while keeping it compact, with the largest battery seen in a mechanical Product.",
//       brand: "Keychron",
//       review: 5,
//       wireless: true,
//       inStock: true,
//       price: 79.99,
//     },
//     {
//       name: "Keychron K10 Wireless Mechanical Product",
//       coverImage: "keychron-k10/keychron-k10-cover.png",
//       images: [],
//       description:
//         "Connects with up to 3 devices via Bluetooth and switch among them easily. With high reliable and broad compatibility Broadcom Bluetooth 5.1 chipset, the K10 is best to fit home, office and light gaming use while connecting with your smartphone, laptop and iPad.",
//       brand: "Keychron",
//       review: 5,
//       wireless: true,
//       inStock: true,
//       price: 94.99,
//     },
//     {
//       name: "Corsair CH-910D019-NA K60 RGB PRO Mechanical Gaming Product",
//       coverImage: "corsair-ch-910/corsair-ch-910d019-na-k60-rgb-pro-cover.png",
//       brand: "Corsair",
//       images: [
//         "corsair-ch-910/corsair-ch-910d019-na-k60-rgb-pro-gallery-one.png",
//         "corsair-ch-910/corsair-ch-910d019-na-k60-rgb-pro-gallery-two.png",
//         "corsair-ch-910/corsair-ch-910d019-na-k60-rgb-pro-gallery-three.png",
//       ],
//       description:
//         "Vivid dynamic RGB lighting control, sophisticated macro programming, and full system lighting synchronization compatible with CORSAIR peripherals, coolers, fans, and more.",
//       review: 5,
//       wireless: false,
//       inStock: false,
//       price: 115.99,
//     },
//     {
//       name: "K68 Mechanical Gaming Product — Red LED — CHERRY® MX Red",
//       coverImage: "corsair-k68/corsair-k68-cover.png",
//       brand: "Corsair",
//       images: [
//         "corsair-k68/corsair-k68-gallery-one.webp",
//         "corsair-k68/corsair-k68-gallery-two.webp",
//         "corsair-k68/corsair-k68-gallery-three.webp",
//       ],
//       description:
//         "The CORSAIR K68 mechanical Product features CHERRY® MX Red keyswitches with dynamic backlighting and dust and spill resistance to enable a high performance gaming experience.",
//       review: 4,
//       wireless: false,
//       inStock: true,
//       price: 129.99,
//     },
//     {
//       name: "K70 RGB MK.2 SE Mechanical Gaming Product — CHERRY® MX Speed",
//       coverImage: "corsair-k70/corsair-k70-cover.webp",
//       brand: "Corsair",
//       images: [
//         "corsair-k70/corsair-k70-gallery-one.webp",
//         "corsair-k70/corsair-k70-gallery-two.webp",
//         "corsair-k70/corsair-k70-gallery-three.webp",
//       ],
//       description:
//         "Stand out with a special silver anodized brushed aluminum frame and stunning white precision-molded, double-shot keycaps. Built to turn heads and withstand a lifetime of gaming.",
//       review: 5,
//       wireless: false,
//       inStock: true,
//       price: 249.99,
//     },
//     //{
//     //   name: "",
//     //   coverImage: "",
//     //   images: [],
//     //   description:
//     //     "",
//     //   review: ,
//     //   wireless: ,
//     //   inStock: ,
//     //   price: ,
//     // },{
//     //   name: "",
//     //   coverImage: "",
//     //   images: [],
//     //   description:
//     //     "",
//     //   review: ,
//     //   wireless: ,
//     //   inStock: ,
//     //   price: ,
//     // },
//   ]);

//   await User.insertMany([
//     {
//       firstName: "Andrew",
//       lastName: "Howran",
//       email: "ahole@gmail.com",
//       password: "mya",
//     },

//     {
//       firstName: "Brianna",
//       lastName: "Howran",
//       email: "briannabanana@gmail.com",
//       password: "ginger",
//     },

//     {
//       firstName: "John",
//       lastName: "Doe",
//       email: "johndoe@gmail.com",
//       password: "password",
//     },
//   ]);
// };
