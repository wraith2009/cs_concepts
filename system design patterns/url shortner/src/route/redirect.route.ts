import { Router } from "express";
import { redirectUrl } from "../controller/url.controller";

const RedirectRouter = Router();
RedirectRouter.get("/:shortCode", redirectUrl);

export default RedirectRouter;
