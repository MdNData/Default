import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

//import routes

//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//import middlewares

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(cookieParser());
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

//not found
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found " });
});

//error middleware

const port = process.env.PORT || 5100;

//connection to db

// try {
//   await mongoose.connect(process.env.MONGO_URL);
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}...`);
//   });
// } catch (err) {
//   process.exit(1);
// }

//until the connection to DB is completed
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
