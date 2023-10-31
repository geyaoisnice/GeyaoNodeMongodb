var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/user/add', function (req, res, next) {
  const { username, password, age } = req.body
  UserModel.create({
    username,
    password,
    age
  }).then(data => {
    console.log(data, "data is")
  })
  //插入数据库
  res.send({
    ok: 1
  })
});
router.post('/user/update/:id', function (req, res, next) {
  const { username, age, password } = req.body
  UserModel.updateOne({ _id: req.params.id },{username}).then(data => {
    res.send({
      ok: 1
    })
  })
});
router.get('/user/delete/:id', function (req, res, next) {
  const { username, age, password } = req.body
  UserModel.deleteOne({ _id: req.params.id }).then(data => {
    res.send({
      ok: 1
    })
  })

});
router.get('/user/list', function (req, res, next) {
  const { username, age, password } 
  = req.body
  UserModel.find({},["username","age"]).sort({age:-1}).then(data=>{
    res.send(data)
  })

});

module.exports = router;
