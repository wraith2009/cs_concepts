import { Router } from "express";
import { shortenUrl } from "../controller/url.controller";

const Urlrouter = Router();

Urlrouter.route("/shorten").post(shortenUrl);
export default Urlrouter;
