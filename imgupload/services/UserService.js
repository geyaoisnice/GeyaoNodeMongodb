const UserModel = require("../model/UserModel")

const UserService = {
    addUserService: (username, password, age, avatar) => {
        return UserModel.create({
            username, password, age,avatar
        }).then(data => {
            console.log(data)
        })
    },
    updateUserService: (_id, username, age, password) => {
        return UserModel.updateOne({ _id: _id }, { username }).then(data => {
            console.log(data)
        })
    },
    deleteUserService: (_id) => {
        return UserModel.deleteOne({ _id: req.params.id }).then(data => {
            console.log(data)
        })
    },
    getUserSerice() {
        return UserModel.find({}, ["username", "age","avatar"]).sort({ age: -1 })
    },
    loginService: (username, password) => {
        return UserModel.find({ username, password })
    }
}
module.exports = UserService