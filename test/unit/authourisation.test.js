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
  beforeEach(() => {
    req.body = signUpData;
  })

  it('should have a signup function', () => {
    expect(typeof AuthourisationController.signup).toBe("function")
  })
  it('should call User.create on models', async () => {
    await AuthourisationController.signup(req, res);
    expect(UserModel.create).toBeCalled();
  })
  it('should return a status code of 201', async () => {
    await AuthourisationController.signup(req, res);
    expect(res.statusCode).toBe(201);
  })
  it('should be able to handle error message', async () => {
    const errorMessage = { message: "Done property missing" };
    const rejectPromise = Promise.reject(errorMessage)
    UserModel.create.mockReturnValue(rejectPromise)
    await AuthourisationController.signup(req, res);
    expect(res.statusCode).toBe(400)
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