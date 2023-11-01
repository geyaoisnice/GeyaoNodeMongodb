var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")
var mongoStore = require("connect-mongo")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
const JWT = require("./util/jwt")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   name:"geyaosystem",
//   secret:"dashini",
//   cookie:{
//     maxAge:1000*60*60,
//     secure:false
//   },
//   resave:true,
//   saveUninitialized:true,
//   store:mongoStore.create({
//     mongoUrl:'mongodb://127.0.0.1:27017/geyao_session',
//     ttl:1000*60*60
//   })
// }))
//设置中间件
// app.use((req,res,next)=>{
//   if(req.url.includes("login")){
//     next()
//     return
//   }
//   if(req.session.user){
//     req.session.mydata=Date.now()
//     next()
//   }else{
//     req.url.includes("api")?res.status(401).send({ok:0}):
//     res.redirect("/login")
//   }
// })
app.use((req, res, next) => {
  if (req.url.includes("login")) {
    next()
    return
  }
  const token = req.headers["authorization"]?.split(" ")[1]
  console.log(token,"token is")
  if (token) {
    const payload = JWT.verify(token)
    if (payload) {
      const newToken=JWT.generate({
        _id:payload._id,
        username:payload.username
      },"1d")
      res.header("Authorization",newToken)
      next()
    } else {
      res.status(401).send({ errCode: -1, errInfo: "token过期" })
    }
  } else {
    next()
  }

})



app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
