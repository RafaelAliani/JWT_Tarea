import Express from "express";
import { getUser } from "../controllers/user-controller.js";
import { createUser } from "../controllers/user-controller.js";
import { loginWhitUser } from "../controllers/user-controller.js";

const router = Express.Router();

router.get("/user", getUser);
router.post("/user/register", createUser);
router.post("/user/login", loginWhitUser);

export default router;
