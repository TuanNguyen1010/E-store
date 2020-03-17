const Authourisation = require('../../controllers/authourisation')

describe('Authourisation.signup', () => {
  it('should have a signup function', () => {
    expect(typeof Authourisation.signup).toBe("function")
  })

})

describe('Authourisation.signin', () => {
  it('should have a signin function', () => {
    expect(typeof Authourisation.signout).toBe("function")
  })
})

describe('Authourisation.signout', () => {
  it('should have a signout function', () => {
    expect(typeof Authourisation.signout).toBe("function")
  })
})