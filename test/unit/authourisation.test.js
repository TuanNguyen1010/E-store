const AuthourisationController = require('../../controllers/authourisation')
const UserModel = require('../../models/user')
const httpMocks = require('node-mocks-http')
const signUpData = require('../mock-data/signUpData')


UserModel.create = jest.fn();

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
})

describe('AuthourisationController.signup', () => {
  it('should have a signup function', () => {
    expect(typeof AuthourisationController.signup).toBe("function")
  })
  it('should call User.create on models', async () => {
    req.body = signUpData;
    await AuthourisationController.signup(req, res);
    expect(UserModel.create).toBeCalled();
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