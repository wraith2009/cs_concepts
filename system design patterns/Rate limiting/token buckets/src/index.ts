import express from "express";
import { rateLimitByIp } from "./middleware/rateLimitByIp";
import { rateLimitGlobal } from "./middleware/rateLimitGlobal";

const app = express();
app.use(express.json());

app.get("/limit-by-ip", rateLimitByIp, (req, res) => {
  res.send(" You are within IP rate limit");
});

app.get("/limit-global", rateLimitGlobal, (req, res) => {
  res.send(" You are within global rate limit");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
