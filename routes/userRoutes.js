const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware')

userRouter.get('/users',  userController.getUsers)
userRouter.delete('/users', userController.deleteUsers)
userRouter.patch('/users/block', userController.blockUsers)
userRouter.patch('/users/unblock', userController.unblockUsers)
userRouter.post('/users/status', authMiddleware, userController.postStatus)
userRouter.get('/users/status', authMiddleware, userController.getStatus)

module.exports = userRouter

