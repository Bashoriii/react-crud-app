import express from 'express';
import {
  getDatas,
  getDataById,
  createData,
  updateData,
  deleteData,
} from '../controllers/UserController.js';

const router = express.Router();

router.get('/datas', getDatas);
router.get('/datas/:id', getDataById);
router.post('/datas', createData);
router.patch('/datas/:id', updateData);
router.delete('/datas/:id', deleteData);

export default router;
