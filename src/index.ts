import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to database!"));

const app = express();

app.use(cors());

app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health Ok!" });
});

app.use("/api/my/user", myUserRoute);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
