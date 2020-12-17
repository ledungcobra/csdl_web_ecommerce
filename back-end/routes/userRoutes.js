import express from 'express';
import {authUser, getUserProfile,registerUser} from "../controllsers/userController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = new express.Router();
router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect,getUserProfile);
export default  router;