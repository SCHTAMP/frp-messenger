import Elysia from "elysia";

export const user = new Elysia({ prefix: "/user" })
  .get("/", () => "Hello from User")
  .put("/", () => {});
