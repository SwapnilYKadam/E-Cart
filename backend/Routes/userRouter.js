import express from "express";
import {
  addProductToWishlist,
  createUser,
  getAllUser,
  getUser,
} from "../Controller/userController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllUser);
router.route("/login").post(getUser);
router.route("/signup").post(createUser);
router.route("/addtowishlist").patch(addProductToWishlist);

router.use("/", (req, res) => {
  res.send("This is user route");
});

export default router;
