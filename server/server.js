const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas/index");
const { authMidWare } = require("./utils/auth");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMidWare,
});

const app = express(express.urlencoded({ extended: true }));

app.use(express.json());

async function startApolloServer(typeDefs, resolvers) {
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server is live on port ${PORT}`);
      console.log(
        `Use for testing at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

startApolloServer(typeDefs, resolvers);


// // Don’t submit any personally identifiable information in requests made with this key.
// // Sign in to see your own test API key embedded in code samples.
// const stripe = require('stripe')('sk_test_Hrs6SAopgFPF0bZXSN3f6ELN');

// const YOUR_DOMAIN = '';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '{{PRICE_ID}}',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));