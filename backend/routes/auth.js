const express = require("express")
const router = express.Router()
const { AuthenticationController } = require('../controllers')

router.post('/register', AuthenticationController.register)
router.post('/login', AuthenticationController.login)
router.post('/logout', AuthenticationController.logout)

module.exports = router