const request = require("supertest");
const app = require('../../app.js');
const signUpData = require("../mock-data/signUpData.json");
const endpointUrl = "/api/signup";

describe(endpointUrl, () => {
  it("POST " + endpointUrl, async () => {
    const response = await request(app)
        .post(endpointUrl)
        .send(signUpData);
      expect(response.body.title).toBe(signUpData.title);
      expect(response.body.done).toBe(signUpData.done);
  })
  it('should return error 400 when no password input' + endpointUrl,
  async () => {
   const response = await request(app)
   .post(endpointUrl)
   .send({
    "name": "Danny",
    "email": "Danny1@gmail.com"
  });
   expect(response.statusCode).toBe(400)
   expect(response.body).toStrictEqual({
     "error": "Password is required"
     })
 })
 it('should return error 400 when no Email input' + endpointUrl,
 async () => {
  const response = await request(app)
  .post(endpointUrl)
  .send({
   "name": "Danny",
   "password": "1234567"
 });
  expect(response.statusCode).toBe(400)
  expect(response.body).toStrictEqual({
    "error": "email must contain @"
    })
  })
  it('should return error 400 when no password input' + endpointUrl,
  async () => {
   const response = await request(app)
   .post(endpointUrl)
   .send({
    "email": "Danny1@gmail.com",
    "password": "1234567"
  });
   expect(response.statusCode).toBe(400)
   expect(response.body).toStrictEqual({
     "error": "Name is required"
     })
 })
})