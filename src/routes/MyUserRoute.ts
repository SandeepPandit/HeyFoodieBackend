import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
const router = express.Router();

router
  .get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser)
  .post("/", jwtCheck, MyUserController.createCurrentUser)
  .put(
    "/",
    jwtCheck,
    jwtParse,
    validateMyUserRequest,
    MyUserController.updateCurrentUser
  );

export default router;
