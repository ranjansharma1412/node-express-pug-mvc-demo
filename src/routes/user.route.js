import express from 'express';
import { addUser, getUsers, renderLogin, renderRegister } from '../controllers/user.controller.js';

const router = express.Router()
// views routes
router.use('/register', renderRegister)
router.use('/login', renderLogin)

//api routes
router.post('/', addUser)
router.get('/', getUsers)

export default router;