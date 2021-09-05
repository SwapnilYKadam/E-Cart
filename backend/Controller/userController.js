import User from "../Model/userModel.js";
import bcrypt from "bcryptjs";
import getJsonWebToken from "../utils/getJsonWebToken.js";

export const createUser = async (req, res) => {
  try {
    const { name, password, email, address } = req.body;

    const data = await User.create({
      name,
      email,
      password,
      address,
    });

    res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      count: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [user] = await User.find({ email }).populate("wishList");

    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          address: user.address,
          token: getJsonWebToken(user._id),
        });
      } else {
        res.status(401).json({
          message: "Email or password invalid",
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const addProductToWishlist = async (req, res) => {
  try {
    const { id, productId } = req.body;

    const user = await User.findById(id);

    user.wishList.push(productId);

    const updatedUser = await user.save();

    res.status(200).json({
      updatedUser,
    });
  } catch (err) {
    console.log(err);
  }
};
