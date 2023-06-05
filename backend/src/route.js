const express = require('express')
const router = express.Router()
const { registerApi, loginApi, getUser } = require('./controller')

router.post('/register', registerApi)
router.post('/login', loginApi)
router.get('/user', getUser)


module.exports = router;