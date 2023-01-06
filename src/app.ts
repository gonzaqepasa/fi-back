import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
// import { prisma } from "./db";
// import routeProducts from "./routes/products";
import routeUser from "./routes/user";


const app = express();

// App use
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/user',routeUser)




app.get("/", (_req, res) => {
  res.send("puto eh ");
});



// Rutas
// app.use('/products',routeProducts)
// app.use('/home',routeHome)
export default app;
