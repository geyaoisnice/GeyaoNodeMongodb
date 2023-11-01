var express = require('express');
const UserModel = require('../model/UserModel');
const UserController = require('../controller/Usercontroller');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/user',UserController.addUser);
router.put('/user/:id',UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.get('/user',UserController.getUser );
router.post('/login',UserController.Login);
router.get('/logout',UserController.Logout);
module.exports = router;
