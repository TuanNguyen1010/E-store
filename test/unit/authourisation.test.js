const AuthourisationController = require('../../controllers/authourisation')

describe('AuthourisationController.signup', () => {
  it('should have a signup function', () => {
    expect(typeof AuthourisationController.signup).toBe("function")
  })

})

describe('AuthourisationController.signin', () => {
  it('should have a signin function', () => {
    expect(typeof AuthourisationController.signout).toBe("function")
  })
})

describe('AuthourisationController.signout', () => {
  it('should have a signout function', () => {
    expect(typeof AuthourisationController.signout).toBe("function")
  })
})