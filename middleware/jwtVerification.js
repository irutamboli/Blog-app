const jwt = require("jsonwebtoken");
const key = "Iru";
const utils = require("utils");

exports.verifyToken = async (req, res, next) => {
  let token;
  try {

    if (req.headers.authorization) {
      token = req.headers.authorization;
    }

    if (!token) throw new Error("A token is required for authentication");

    const decode = jwt.verify(token, key);
    if(!decode) throw new Error("Invalid Token")

    next();

  } catch (error) {
    next(error);
    // return res.status(401).send("Invalid Token")
  }
};