exports.userSignupValidator = (req, res, next) => {
  req.check('name', 'Name is required').noEmpty()
  req.check('email', 'Email must be between 3 and 32 characters')
      .match(/.+\@.+\.,+/)
      .withMessage('email must contain @')
      .isLength({
        min:4, 
        max:32
      });
      req.check('password', 'Password is required').noEmpty()
      req.check('password')
      .isLength({min:6})
      .withMessage('Password must contain 6 characters')
      .matches(/\d/)
      .withMessage('Password must contain a number')
        const errors = req.validationErrors()
        if(errors) {
          const firstError = errors.map(error => error.message) [0]
          return res.status(400).json({ error: firstError})
        }
        next()
}