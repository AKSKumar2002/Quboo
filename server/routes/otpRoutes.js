import express from 'express';
import { sendOtpToUser, verifyOtp } from '../controllers/otpController.js';

const router = express.Router();

router.post('/send', sendOtpToUser);
router.post('/verify', verifyOtp);

export default router;
