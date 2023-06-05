const User = require('./model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// Register User
const registerApi = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ username, password: hashedPassword, role })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Registration failed' })
  }
}

// Login User/Admin
const loginApi = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const token = jwt.sign({ userId: user._id, username: user.username }, 'secretKey')
    res.status(200).json({ token, role: user.role })

  } catch (error) {
    res.status(500).json({ message: 'Login failed' })
  }
}

const getUser = async (req, res) => {
  try {
    let data = await User.find()
    // console.log(data)
    return res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: 'failed to fetch' })
  }
}

module.exports = { registerApi, loginApi, getUser }