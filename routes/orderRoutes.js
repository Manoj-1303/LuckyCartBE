import express from 'express';
import { createOrder, getOrdersByUserId } from '../controllers/orderController.js';

const router = express.Router();
router.route('/')
  .post(createOrder)
  .get(getOrdersByUserId);

export default router;
