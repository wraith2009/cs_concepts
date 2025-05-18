import express from "express";
import dotenv from "dotenv";
import Urlrouter from "./route/url.route";
import RedirectRouter from "./route/redirect.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", Urlrouter);
app.use("/", RedirectRouter);
app.listen(PORT, () => {
  console.log("server is running");
});
