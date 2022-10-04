const express = require("express")
const router = express.Router()
const { RecruiterController } = require('../controllers')
const { loggedIn } = require("../middleware/loggedIn")


router.post('/add', loggedIn, RecruiterController.add_recruiter)
router.put('/update', loggedIn, RecruiterController.update_recruiter)
// router.get('/:id', loggedIn, RecruiterController.view_recruiter)

module.exports = router