var jwt = require("jsonwebtoken")
const secret="geyao-anydata"
console.log(token, "token is")

const JWT={
    generate(value,expires){
        return jwt.sign(value,secret,{expiresIn:expires})
    },
    verify(token){
        try {
            return jwt.verify(token,secret)
        } catch (error) {
            return false
        }
       
    }
}

module.exports=JWT