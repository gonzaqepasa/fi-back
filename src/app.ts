import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { prisma } from "./db";
// import routeProducts from "./routes/products";
// import routeHome from "./routes/home";

const app = express();

// App use
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.send("puto eh ");
});

app.get("/create", async (_req, res) => {
  const data = await prisma.test.create({
    data: {
      name: "Hola",
    },
  });
  res.send(data);
});

// Rutas
// app.use('/products',routeProducts)
// app.use('/home',routeHome)
export default app;
