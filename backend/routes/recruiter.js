const express = require("express")
const router = express.Router()
const { RecruiterController } = require('../controllers')
const { loggedIn } = require("../middleware/loggedIn")

router.post('/add', loggedIn, RecruiterController.add_recruiter)
router.put('/update', loggedIn, RecruiterController.update_recruiter)
router.get('/profile', loggedIn, RecruiterController.view_recruiter_profile)
router.get('/viewall', loggedIn, RecruiterController.view_recruiters)

// For recruiter picture data
router.post('/addpfp', loggedIn, RecruiterController.add_recruiter_profile_picture)
router.put('/updatepfp', loggedIn, RecruiterController.update_recruiter_profile_picture)
router.get('/profilepicture', loggedIn, RecruiterController.view_recruiter_profile_picture)
router.get('/othersprofilepicture', loggedIn, RecruiterController.view_others_profile_picture)

// For recruiter job post data
router.post('/addjobpost', loggedIn, RecruiterController.add_job_post)

module.exports = router