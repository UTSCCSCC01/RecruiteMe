const express = require("express")
const router = express.Router()
const { CompanyController } = require('../controllers')
const { loggedIn } = require("../middleware/loggedIn")

// For job seeker text data
router.post('/add', loggedIn, CompanyController.add_company)
router.get('/view/:id', loggedIn, CompanyController.view_company)
router.put('/update', loggedIn, CompanyController.update_company)

// router.get('/profile', loggedIn, CompanyController.view_reviews)


module.exports = router;