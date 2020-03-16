const express = require('express');
const router = express.Router()
const {signup, signin, signout, requireSignin} = require('../controllers/authourisation')
const {userSignupValidator} = require('../validator')


router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);


router.get('/loyalty', requireSignin, (req, res) => {
  res.send("hello loyal members")

})


module.exports = router;