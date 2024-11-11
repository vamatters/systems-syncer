const request = require("supertest");
const app = require("../app");

describe("GET /greet/:myName", () => {
  it("should return Hello, <name>!", async () => {
    const name = "John";
    const response = await request(app).get(`/greet/${name}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`Hello, ${name}!`);
  });

  it("should return 400 for missing name", async () => {
    const response = await request(app).get("/greet/");
    expect(response.status).toBe(404);

    expect(response.body.error).toBe(undefined);
  });
});
