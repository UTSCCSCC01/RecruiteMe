const express = require("express")
const router = express.Router()
const { JobSeekerController } = require('../controllers')
const { loggedIn } = require("../middleware/loggedIn")


router.post('/add', loggedIn, JobSeekerController.add_job_seeker)
router.put('/update', loggedIn, JobSeekerController.update_job_seeker)
router.get('/profile', loggedIn, JobSeekerController.view_job_seeker_profile)
router.get('/viewall', loggedIn, JobSeekerController.view_job_seekers)

module.exports = router