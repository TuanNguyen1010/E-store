const User = require('../models/user')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const {errorHandler} = require("../helpers/dbErrorHandler")

exports.signup = async (req, res) => {
  // console.log("req.body", req.body)
  // const user = await new User(req.body)
  User.create(req.body, (err, user) => {
    if(err) {
      return res.status(400).json({
        err: errorHandler(err)
      });
    }
    user.salt = undefined
    user.hashed_password = undefined
    return res.status.json({
      user
    })
  })
  res.status(201)
}

exports.signin = (req, res) => {
  // find user based on email
  const { email, password } = req.body;
  // search the database for matching email
  User.findOne({email}, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
        err: "user with that email doesn't exist, please sign up"
      });
    }
    if(!user.authenticate(password)) {
      return res.status(401). json({
        error: "Email and password don't match"
      })
    }
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    res.cookie('t', token, {expire: new Date() + 9999})
    const {_id, name, email, role} = user
    return res.json({token, user: {_id, name, email, role}})
  });
}

exports.signout = (req, res) => {
  res.clearCookie('t');
  res.json({message: "sign out sucessful"})
}

exports.requireSignin = expressJwt({
  secret: "agdsagdsag",
  userProperty: 'auth'
})

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: 'Acess is denied'
    })
  }
  next()
}