import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { errorMiddleware } from "@packages/error-handler/error-middleware";
import router from "./routes/auth.router";
import swaggerDocument from "./swagger-output.json";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const app = express();

app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send({ message: "Hello API" });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/docs-json", (req, res) => {
  res.json(swaggerDocument);
});

//routes
app.use("/api", router);

app.use(errorMiddleware);

const server = app.listen(port, host, () => {
  console.log(`[ AUTH SERVICE ready ] http://${host}:${port}/api`);
  console.log(`Swagger Docs available @ http://localhost:${port}/docs`);
});

server.on("error", (err) => {
  console.log("Server Error: ", err);
});
