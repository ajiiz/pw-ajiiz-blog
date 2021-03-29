import jwt from "jsonwebtoken";

import UserModel from "../models/user.js"

export const signin = async (req, res) => {
    const { username, password } = req.body;

  };