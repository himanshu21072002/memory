import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts",postRoutes);
const Port= process.env.Port||5000;

mongoose
  .connect(process.env.MongoDB)
  .then(() => {
    app.listen(Port, function () {
      console.log(`server started at port ${Port}`);
    });
  })
  .catch((error) => {
    console.log(error.Message);
  });


