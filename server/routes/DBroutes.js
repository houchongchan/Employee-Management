import express from 'express';
import { createEmployees, getEmployees, delEmployees } from '../controllers/controllerfunctions.js';

const router = express.Router(); 

router.post('/', createEmployees); 
router.get('/', getEmployees); 
router.post('/delemployees', delEmployees); 

export default router; 