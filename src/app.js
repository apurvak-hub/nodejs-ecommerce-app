import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("NodeJS E-commerce API is running 🚀");
});

export default app;
