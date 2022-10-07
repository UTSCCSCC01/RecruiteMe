const express = require("express")
const router = express.Router()
const { JobSeekerController } = require('../controllers')
const { loggedIn } = require("../middleware/loggedIn")
const { upload } = require("../middleware/upload")

// For job seeker text data
router.post('/add', loggedIn, JobSeekerController.add_job_seeker)
router.put('/update', loggedIn, JobSeekerController.update_job_seeker)
router.get('/profile', loggedIn, JobSeekerController.view_job_seeker_profile)
router.get('/viewall', loggedIn, JobSeekerController.view_job_seekers)

// For job seeker picture data
router.post('/addpfp', loggedIn, upload.single('image'), JobSeekerController.add_job_seeker_profile_picture)
router.put('/updatepfp', loggedIn, upload.single('image'), JobSeekerController.add_job_seeker_profile_picture)
router.get('/profilepicture', loggedIn, JobSeekerController.view_job_seeker_profile_picture)

module.exports = router