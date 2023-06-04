import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes.js"
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/users", userRoutes);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🚀🚀🚀 Server running on port: ${PORT} 🚀🚀🚀`)
    )
  )
  .catch((error) => console.log(error.message));
