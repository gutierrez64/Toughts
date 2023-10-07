const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

router.get('/login', AuthController.login)
router.get('/register', AuthController.rigister)
router.post('/register', AuthController.registerPost)

module.exports = router