const createServer = require("../../server");
const app = createServer();

const request = require("supertest");

describe("Integretion tests for the Products API", () => {
  it("GET /api/products - success - get all the products", async () => {
    const { body, statusCode } = await request("http://localhost:3001").get(
      "/api/products"
    );

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ProductId: expect.any(Number),
          Name: expect.any(String),
          ImgUrl: expect.any(String),
          Price: expect.any(Number),
          Description: expect.any(String),
          Enable: expect.any(Boolean),
        }),
      ])
    );

    expect(statusCode).toBe(200);
  });

  it("POST /api/products - falure on invalid post body", async () => {
    const payload = {
      Name: "",
      ImgUrl: "img_test_unitTesting",
      Price: 0,
      Description: "this is a test in the unit test",
      Enable: "",
    };

    const { body, statusCode } = await request(app)
      .post("/api/products")
      .send(payload);

    expect(statusCode).toBe(400);

    expect(body).toEqual({
      errors: [
        {
          location: "body",
          msg: "El nombre del producto es requerido",
          path: "Name",
          type: "field",
          value: "",
        },
        {
          location: "body",
          msg: "Es necesario indicar si el producto esta disponoble o no",
          path: "Enable",
          type: "field",
          value: "",
        },
        {
          location: "body",
          msg: "El valor de enable no esta en un formato correcto",
          path: "Enable",
          type: "field",
          value: "",
        },
      ],
    });
  });

  it("POST - /api/products - success", async () => {
    const payload = {
      Name: "test",
      ImgUrl: "",
      Price: 0,
      Description: "",
      Enable: 1,
    };

    const { body, statusCode } = await request("http://localhost:3001")
      .post("/api/products")
      .send(payload);

    expect(statusCode).toBe(201);
  });
});
