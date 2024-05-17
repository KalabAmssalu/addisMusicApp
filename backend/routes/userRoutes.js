const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

router.post('/user', userController.createUser) // Register
router.post('/user/auth', userController.authUser) // login
router.post('/user/logout', userController.logoutUser) // logout
router.get('/user', userController.getAllUser) //get all user
router.get('/user/profile',protect, userController.getUser) //get a user profile
router.put('/user/profile', protect, userController.updateUser) // Update Profile
router.delete('/user/:id', protect, userController.deleteUser) // Delete Account

module.exports = router;


