import expreess from 'express';
import { singup } from '../controllers/auth.controller.js';

const router = expreess.Router();

router.post('/signup', singup)


export default router;