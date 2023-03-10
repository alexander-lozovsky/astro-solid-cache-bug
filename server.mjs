import express from "express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const app = express();

app.use(
  express.static("dist/client/", { cacheControl: true, maxAge: "500000" })
);
app.use(ssrHandler);

app.listen(8080, () => {
  console.log("Open http://localhost:8080/");
});
