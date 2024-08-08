import express from 'express';
import { login, logout, register, updateProfile } from '../controllers/user.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { singleUpload } from "../middleware/mutler.js";

const router = express.Router();

router.post('/register', singleUpload, register);
router.post('/login', login);
router.post('/profile/update', isAuthenticated, singleUpload, updateProfile);
router.get('/logout', logout);

export default router;
