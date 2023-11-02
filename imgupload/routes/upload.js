var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('upload', { title: 'Express' });
});

// var jwt = require("jsonwebtoken")
// var token = jwt.sign({
//   data: 'geyao',
// }, 'anydata', { expiresIn: "10d" })
// console.log(token, "token is")
 module.exports = router;
