import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";

const app = express();

app.use("/posts",postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const MongoDB =
  "mongodb+srv://himanshugangwar2000:Himanshu24@cluster0.mmoc3ht.mongodb.net/?retryWrites=true&w=majority";
const Port= process.env.Port||5000;

mongoose
  .connect(MongoDB)
  .then(() => {
    app.listen(Port, function () {
      console.log(`server started at port ${Port}`);
    });
  })
  .catch((error) => {
    console.log(error.Message);
  });


