import jwt from "jsonwebtoken";

import UserModel from "../models/user.js"

export const signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const oldUser = await UserModel.findOne({ username });

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });


      } catch (e) {
        res.status(500).json({ message: "Something went wrong" + e });
      }
  };