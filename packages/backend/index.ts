import { Elysia, file } from "elysia";
import { swagger } from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { user } from "./routes";

new Elysia({
  serve: {
    tls: {
      key: Bun.file("myhost.local-key.pem"),
      cert: Bun.file("myhost.local.pem"),
    },
  },
  prefix: "/api",
})
  .use(cors({ credentials: true, origin: "myhost.local:3000" }))
  .ws("/ws", {
    message(ws, message) {
      console.log(message);
    },
  })
  .get("/", (ctx) => "hi")
  .use(user)

  .listen(3000, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  });
