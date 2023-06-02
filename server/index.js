import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/proyecto.js";

const app = express();

mongoose.set('strictQuery', false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/", routes);

const port = process.env.PORT || 5000;

app.use(cors());
const server = http.createServer(app);

mongoose.connect('mongodb+srv://brandjuan:nDV1dZYmQCH7bbq4@civilizacion-china.p8tyooj.mongodb.net/CivilizacionesDB').then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});


export default app;

//test