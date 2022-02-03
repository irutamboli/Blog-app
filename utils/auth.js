const jwt = require('jsonwebtoken');

const key =  "Iru"//here you can create your own key and can also import it to be more secured
exports.createJwt = (payload)=>{
    const token = jwt.sign(payload,key,{expiresIn:'1hr'});//its imp to send pl, key and expire duration
    return token
}