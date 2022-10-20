const express = require("express")
const router = express.Router()
const { JobSeekerController } = require('../controllers')
const { loggedIn } = require("../middleware/loggedIn")

// For job seeker text data
router.post('/add', loggedIn, JobSeekerController.add_job_seeker)
router.put('/update', loggedIn, JobSeekerController.update_job_seeker)
router.get('/profile', loggedIn, JobSeekerController.view_job_seeker_profile)
router.get('/viewall', loggedIn, JobSeekerController.view_job_seekers)
router.get('/view/:id', loggedIn, JobSeekerController.view_job_seeker)

// For job seeker picture data
router.post('/addpfp', loggedIn, JobSeekerController.add_job_seeker_profile_picture)
router.put('/updatepfp', loggedIn, JobSeekerController.update_job_seeker_profile_picture)
router.get('/profilepicture', loggedIn, JobSeekerController.view_job_seeker_profile_picture)
router.get('/othersprofilepicture/:id', loggedIn, JobSeekerController.view_others_profile_picture)

// For job seeker resume data
router.post('/addresume', loggedIn, JobSeekerController.add_job_seeker_resume)
router.put('/updateresume', loggedIn, JobSeekerController.update_job_seeker_resume)
router.get('/resume', loggedIn, JobSeekerController.view_job_seeker_resume)

// For job seeker job post data
router.get('/openjobposts', loggedIn, JobSeekerController.view_open_job_posts)
router.post('/apply', loggedIn, JobSeekerController.apply_job_post)
router.get('/myapplications', loggedIn, JobSeekerController.my_job_applications)

module.exports = router