const express = require("express");
const {
  userLogin,
  updateImage,
  updatePassword,
  createUser,
  getUserDetailes,
  uploadProfileImage
} = require("../controllers/userController");
const authenticateJWT = require("../middlewares/authentication");

const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.put("/updateImage", updateImage);
userRouter.put("/updatePassword", updatePassword);
userRouter.post("/register", createUser);
userRouter.get("/profile", authenticateJWT, getUserDetailes);
userRouter.put("/uploadProfileImage", uploadProfileImage);

module.exports = userRouter;
