import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import PostRoute from "./Routes/PostRoute.js";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://user:RktkkTGK2dcU5DA7@cluster0.yrm1z.mongodb.net/TestSchema?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log("MongoDB connected");
      console.log(`Listening at ${process.env.PORT}`);
    })
  )
  .catch((error) => console.log(error));

app.use("/post", PostRoute);
