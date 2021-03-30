import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import UserModel from "../models/user.js"

export const signin = async (req, res) => {

  const { username, password } = req.body
  const secret = process.env.SECRET_TOKEN

  try {
    const existingUser = await UserModel.findOne({ username })
    if (!existingUser) return res.status(404).json({ message: "User doesn't exist" })

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid password" })

    const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, secret, { expiresIn: "2h" })
    res.status(200).json({ result: existingUser, token })

    } catch (e) {
      res.status(500).json({ message: "Something went wrong. " + e })
    }
}