const app=require("./app");
const port=process.env.PORT || 9090
const mongoose=require("mongoose")


mongoose.connect("mongodb+srv://iru:iru1985@cluster0.nlqgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(data=>{
    console.log("connected to Db")
    app.listen(port,()=>{
        console.log(`Server running at Port ${port}`)
    })
}).catch(error=>{
    console.log("error")
})
