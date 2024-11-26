import User from "../models/UserModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'All Fields are Required'
    })
  }

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User Already Exist'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = User({
      fullname,
      email,
      password: hashedPassword
    })

    await newUser.save()

    res.status(201).json({
      success: true,
      message: 'User Registered Successfully'
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    })
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    })
  }

  try {
    const validUser = await User.findOne({ email })

    if (!validUser) {
      return res.status(401).json({
        success: false,
        message: 'User does not exist',
      });
    }

    const validPassword = await bcrypt.compare(password, validUser.password)

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    const { password: hashedPassword, ...userData } = validUser._doc;

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      // sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax',
      sameSite: 'None',
      maxAge: 3600000
    })

    return res.status(201).json({
      success: true,
      message: 'Login Successfully',
      user: userData
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error'
    })
  }
}

export const signout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "Strict" : "Lax",
  });
  return res.status(200).json({
    success: true,
    message: 'Successfully Logged Out'
  })
}