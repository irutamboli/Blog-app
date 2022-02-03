//routes are created  like post or get for every route object like if banking hoga toh rtgs ,imps sabki routes alag hogi

const express = require("express");
const {
  getData,
 
  signup,
  
  login,
  
} = require("../controller/authController");

const { middlewareAuthentication } = require("../middleware/cryptPass")

const router = express.Router();

router.get("/getAllData", getData);

router.post("/login", login);

router.post("/signup",middlewareAuthentication, signup);



module.exports = router;
