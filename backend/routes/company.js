const express = require("express")
const router = express.Router()
const { CompanyController } = require('../controllers')
const { loggedIn } = require("../middleware/loggedIn")

// For company text data
router.post('/add', loggedIn, CompanyController.add_company)
router.get('/view/:id', loggedIn, CompanyController.view_company)
router.put('/update', loggedIn, CompanyController.update_company)
router.post('/review', loggedIn, CompanyController.add_review)

// For company picture data
router.post('/addpfp', loggedIn, CompanyController.add_company_profile_picture)
router.put('/updatepfp', loggedIn, CompanyController.update_company_profile_picture)
router.get('/othersprofilepicture/:id', loggedIn, CompanyController.view_company_profile_picture)
// router.get('/profile', loggedIn, CompanyController.view_reviews)

module.exports = router;