import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import productRouter from "./Routes/productRouter.js";
import userRouter from "./Routes/userRouter.js";
import checkoutRouter from "./Routes/checkoutRouter.js";

const app = express();

app.use(express.json());

dotenv.config();
connectDB();

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/checkout", checkoutRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
