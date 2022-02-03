//controllers are their to send response and req ffrom server to database

const Blog = require("../models/Blog");
const { createJwt } = require("../utils/auth");

exports.getData = async (req, res) => {
  try {
    const data = await authentication.Blog.find();
    res.json({ data: data });
  } catch (error) {
    console.log(error);
  }
};





exports.signup = async (req, res) => {
  console.log(req.body);
  try {
    const getData = await Blog.find();
    const username =getData.map((ele)=>ele.username)
    const email =getData.map((ele)=>ele.email)

    if((!username.includes(req.body.username))&&(!email.includes(req.body.email))){
      const data = await Blog.create(req.body);
      res.json({ message: "user signup successfully", data: data });

    }else{
      res.json({message:"User name already exist"})
    }
    
  } catch (error) {
    console.log(error);
  }
};


exports.login = async (req, res, next) => {
  
  try {
    const data = await Blog.findOne({ username: req.body.username });
    if (!data) throw new Error("Username not found");

    // we have to run some checks that password matches or not
    const pass = await data.correctPassword(req.body.password, data.password);
    if (!pass) throw new Error("Incorrect Password");

    // we have to return jwt
   
    const token = createJwt(JSON.parse(JSON.stringify(data))); 
    //Parse the data with JSON.parse() , and the data becomes a JavaScript object.
    //The JSON. stringify() method converts a JavaScript object or value to a JSON string.

    res.json({ message: "Login SuccessFully !!", token: token });
  } catch (error) {
    // agr error aati hai to yeh next error middleware m bhej dega
    next(error);
  }
};



// exports.login = async (req, res) => {
//   console.log(req.body);
//   try {
//     const username = await Blog.find({
//        username:req.body.username
//     });
//     if(username){
//       res.json({ message: " login successfull",data:username})
//     }else{
//      res.json({message:"invalid username"})
//     }
//     const password = await Blog.find({
//       password:req.body.password
//    });
//    if(!password){
//     res.json({ message: " invalid password"})
//   }else{
//    res.json({message:"successfull "})
//   }}
//   catch (error) {
//     console.log(error);
//   }
//   }; 





