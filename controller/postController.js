//controllers are their to send response and req ffrom server to database

const Post = require("../models/post");

exports.getData = async (req, res) => {
  try {
    const data = await Post.find();
    res.json({ data: data });
  } catch (error) {
    console.log(error);
  }
};



exports.updateById = async (req, res) => {

  try {
    const data = await Post.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: req.body,
      }
    );
    res.json({message: "data updated",data:data })
  } catch (error) {
   throw new Error(error)
  }
};

exports.postData = async (req, res) => {
  console.log(req.body);
  try {
    const data = await Post.create(req.body);
    res.json({ message: "Data Added", data: data });
  } catch (error) {
    console.log(error);
  }
};



exports.del = async (req, res) => {
console.log(req.params)
  try {
    const data = await Post.deleteOne({_id: req.body.id});//use body instaed of params
    res.json({ message: "Data deleted", data:data });
  } catch (error) {
    console.log(error);
  }
};
