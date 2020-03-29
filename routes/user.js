const express = require('express');
const router = express.Router()

const {userById} = require('../controllers/user')
const {requireSignin, isAuth, isAdmin} = require('../controllers/authourisation')

router.get("/shopper/:userId", requireSignin, isAuth, (req, res) => {
  res.json({ 
    user: req.profile, 
    message: "welcome to the shopper's account"})
})
router.param("userId", userById);

module.exports = router;