import express from "express";
import * as userController from "../controllers/userController.js"; //import methods for querying user info.

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.postCreateUser);
router.patch("/:id", userController.patchUser);
router.delete("/:id", userController.deleteUser);

export default router; //export routes
