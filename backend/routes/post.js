const express = require("express")
const router = express.Router()
const { PostController } = require('../controllers')

router.get('/view/:pid', PostController.view_post)

module.exports = router