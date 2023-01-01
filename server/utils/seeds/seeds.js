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

//Product data

/** 
 * 
 * {
        "_id" : ObjectId("62feddace2a2868367d339ba"),
        "title" : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "image" : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "description" : "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category" : "men's clothing",
        "rating" : {
                "rate" : "3.9",
                "count" : "120"
        },
        "price" : 109.95,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339bb"),
        "title" : "Mens Casual Premium Slim Fit T-Shirts ",
        "image" : "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "description" : "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category" : "men's clothing",
        "rating" : {
                "rate" : "4.1",
                "count" : "259"
        },
        "price" : 22.3,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339bc"),
        "title" : "Mens Cotton Jacket",
        "image" : "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "description" : "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category" : "men's clothing",
        "rating" : {
                "rate" : "4.7",
                "count" : "500"
        },
        "price" : 55.99,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339bd"),
        "title" : "Mens Casual Slim Fit",
        "image" : "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "description" : "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category" : "men's clothing",
        "rating" : {
                "rate" : "2.1",
                "count" : "430"
        },
        "price" : 15.99,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339be"),
        "title" : "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "image" : "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "description" : "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category" : "jewelery",
        "rating" : {
                "rate" : "4.6",
                "count" : "400"
        },
        "price" : 695,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339bf"),
        "title" : "Solid Gold Petite Micropave ",
        "image" : "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "description" : "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category" : "jewelery",
        "rating" : {
                "rate" : "3.9",
                "count" : "70"
        },
        "price" : 168,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c0"),
        "title" : "White Gold Plated Princess",
        "image" : "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "description" : "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category" : "jewelery",
        "rating" : {
                "rate" : "3",
                "count" : "400"
        },
        "price" : 9.99,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c1"),
        "title" : "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "image" : "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "description" : "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category" : "jewelery",
        "rating" : {
                "rate" : "1.9",
                "count" : "100"
        },
        "price" : 10.99,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c2"),
        "title" : "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "image" : "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "description" : "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        "category" : "electronics",
        "rating" : {
                "rate" : "3.3",
                "count" : "203"
        },
        "price" : 64,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c3"),
        "title" : "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "image" : "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "description" : "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        "category" : "electronics",
        "rating" : {
                "rate" : "2.9",
                "count" : "470"
        },
        "price" : 109,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c4"),
        "title" : "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "image" : "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "description" : "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "category" : "electronics",
        "rating" : {
                "rate" : "4.8",
                "count" : "319"
        },
        "price" : 109,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c5"),
        "title" : "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "image" : "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "description" : "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category" : "electronics",
        "rating" : {
                "rate" : "4.8",
                "count" : "400"
        },
        "price" : 114,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c6"),
        "title" : "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "image" : "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "description" : "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 
hertz",
        "category" : "electronics",
        "rating" : {
                "rate" : "2.9",
                "count" : "250"
        },
        "price" : 599,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c7"),
        "title" : "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "image" : "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "description" : "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category" : "electronics",
        "rating" : {
                "rate" : "2.2",
                "count" : "140"
        },
        "price" : 999.99,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c8"),
        "title" : "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "image" : "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "description" : "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt 
and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "category" : "women's clothing",
        "rating" : {
                "rate" : "2.6",
                "count" : "235"
        },
        "price" : 56.99,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339c9"),
        "title" : "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "image" : "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "description" : "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "category" : "women's clothing",
        "rating" : {
                "rate" : "2.9",
                "count" : "340"
        },
        "price" : 29.95,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339ca"),
        "title" : "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "image" : "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "description" : "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category" : "women's clothing",
        "rating" : {
                "rate" : "3.8",
                "count" : "679"
        },
        "price" : 39.99,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339cb"),
        "title" : "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "image" : "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "description" : "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category" : "women's clothing",
        "rating" : {
                "rate" : "4.7",
                "count" : "130"
        },
        "price" : 9.85,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339cc"),
        "title" : "Opna Women's Short Sleeve Moisture",
        "image" : "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "description" : "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category" : "women's clothing",
        "rating" : {
                "rate" : "4.5",
                "count" : "146"
        },
        "price" : 7.95,
        "__v" : 0
}
{
        "_id" : ObjectId("62feddace2a2868367d339cd"),
        "title" : "DANVOUY Womens T Shirt Casual Cotton Short",
        "image" : "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "description" : "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category" : "women's clothing",
        "rating" : {
                "rate" : "3.6",
                "count" : "145"
        },
        "price" : 12.99,
        "__v" : 0
}
 */
