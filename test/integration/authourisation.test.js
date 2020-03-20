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
})