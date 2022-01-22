import request from "supertest";

import app from "./app.js";

describe("GET /movies", function () {
  test("gives us back 200, with a message", async function () {
    const expectedBody = {
      message: "I wish we had some information to give you ☹️"
    };
    const actual = await request(app).get("/movies");
    expect(actual.body).toStrictEqual(expectedBody);
    expect(actual.statusCode).toBe(200);
  });
});
