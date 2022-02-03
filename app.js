const express=require("express");
require("dotenv").config();

const authRoutes=require("./routes/authRoutes")
const postRoutes=require("./routes/postRoutes")

const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());// while sending data from postman like object etc its help 
//to convert it to json format if not used postman gives error while sending data.
app.use(express.urlencoded({extended:false}))

//adding header to be send to create protected auth
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin,X-Requested-With,Content-Type,Accept,Authorization'
//     )
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
//     next()
// });


app.use("/api/auth",authRoutes,) //to call collection of api's we use {app.use}

app.use("/api/post",postRoutes,) //to call collection of api's we use {app.use}
  



module.exports=app;
