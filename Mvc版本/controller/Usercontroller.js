const UserService = require("../services/UserService")

const UserController = {
    addUser: async (req, res, next) => {
        const { username, password, age } = req.body
        await UserService.addUserService(username, password, age)
        //插入数据库
        res.send({
            ok: 1
        })
    },
    updateUser: async (req, res, next) => {
        const { username, age, password } = req.body
        await UserService.updateUserService(req.params.id, req.params.username, req.params.age, req.params.password)
        res.send({
            ok: 1
        })
    },
    deleteUser: async (req, res, next) => {
        const { username, age, password } = req.body
        await UserService.deleteUserService(req.params.id)
        res.send({
            ok: 1
        })
    },
    getUser:async(req, res)=>{
        const { username, age, password } 
        = req.body
        let data=await UserService.getUserSerice()
        console.log(data,"geyao is ")
        res.send(data)
      
      }
}
module.exports = UserController