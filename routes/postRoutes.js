//routes are created  like post or get for every route object like if banking hoga toh rtgs ,imps sabki routes alag hogi

const express = require("express");

const {
  getData,
  updateById,
  postData,
  del
} = require("../controller/postController");
const router = express.Router();


router.get("/getAllPostData", getData);



router.post("/postData", postData);



router.put("/update-post", updateById);//updating using body


router.delete("/delete", del); //deleting using params

module.exports = router;
