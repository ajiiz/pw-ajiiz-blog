import jwt from "jsonwebtoken";

import UserModel from "../models/user.js"

export const signin = async (req, res) => {
    const { username, password } = req.body
    try {
        const existingUser = await UserModel.findOne({ username })
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect = await password == existingUser.password
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid password" })

      } catch (e) {
        res.status(500).json({ message: "Something went wrong" + e })
      }
  };