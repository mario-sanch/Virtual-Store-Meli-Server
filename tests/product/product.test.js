/*
const request = require("supertest");
const app = require("../../index");

describe("get all products", () => {
  it("respond with json containing a list of products", (done) => {
    request(app)
      .get("/api/products")
      .set("Accept", "application/json")
      .expect("Content-Type", "/json/")
      .expect(200, done);
  });
});

describe("user by id", () => {
  it("respond with a json containing a single product", (done) => {
    // check if user exists
    // check if id is valid
    // check if user is null
  });
});
*/
/*-------------------------*/
const request = require("supertest");

const app = require("express")();

app.get("/api/breeds/image/random", function (req, res) {
  res.status(200).json({
    message: "http://example.com",
    status: "success",
  });
});

request(app)
  .get("/api/breeds/image/random")
  .end(function (err, res) {
    if (err) throw err;
    console.log(res.body);
  });

request("https://dog.ceo")
  .get("/api/breeds/image/random")
  .end(function (err, res) {
    if (err) throw err;
    console.log(res.body);
  });
