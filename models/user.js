const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuidv1')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true, 
    maxlength: 32,

  }, 
  email: {
    type: String, 
    trim: true,
    required: true, 
    maxlength: 70
  }, 
  hashed_password: {
    type: String, 
    required: true
  },
  about: {
    type: String, 
    trim: true,
  }, 
  salt: String,
  role: {
    //admin or user, Admin = 1, user = 0
    type: Number, 
    default: 0
  },
  history: {
    type: Array, 
    default: []
  }
}, {timestamps: true}
)