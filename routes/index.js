import express from 'express';
import employees from './employeeRoute';
const router = express.Router();
router.use('/employees', employees);
export default router;
