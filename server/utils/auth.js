const jwt = require("jsonwebtoken");

const secret = "gibberish";
const expiration = "1h";

module.exports = {
  authMidWare: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (error) {}
  },

  signToken: function ({ email, _id }) {
    const payload = { email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
