const AuthourisationController = require('../../controllers/authourisation')
const UserModel = require('../../models/user')
const httpMocks = require('node-mocks-http')
const signUpData = require('../mock-data/signUpData')


UserModel.save = jest.fn();

describe('AuthourisationController.signup', () => {
  it('should have a signup function', () => {
    expect(typeof AuthourisationController.signup).toBe("function")
  })
  it('should call User.create on models', () => {
    let req, res;
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
    req.body = signUpData;
    AuthourisationController.signup(req, res);
    expect(UserModel.save).toBeCalledWith(signUpData);
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