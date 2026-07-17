import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoutes";
import resumeRouter from "./routes/resumeRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
