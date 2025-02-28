const request = require("supertest");
const app = require("../app");
let server;

beforeAll(() => {
  server = require("../server");
});

afterAll((done) => {
  server.close(done);
});

describe("API Endpoints", () => {
  it("should return pizza places", async () => {
    const res = await request(app).get("/api/search/pizza?location=New%20York");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should return juice places", async () => {
    const res = await request(app).get("/api/search/juice?location=New%20York");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should return combo places", async () => {
    const res = await request(app).get("/api/search/combo?location=New%20York");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
