import jwt from "jsonwebtoken";
import UserModel from "../models/usersSchema.js";

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.token;
    console.log(token);
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log(payload);
    if (payload) {
      const user = await UserModel.findById(payload._id);
      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};
