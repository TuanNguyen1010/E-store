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
  it('should return error 400 on malformed data with POST' + endpointUrl,
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
})