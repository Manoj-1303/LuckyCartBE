import Order from '../models/orderModel.js';

export const createOrder = async (req, res) => {
  try {
    const { firebaseUid, userEmail, shippingAddress, orderItems, totalPrice } = req.body;
    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    const order = new Order({
      firebaseUid,
      userEmail,
      shippingAddress,
      orderItems,
      totalPrice
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server Error creating order', error: error.message });
  }
};

export const getOrdersByUserId = async (req, res) => {
  try {
    const { uid } = req.query;
    if (!uid) {
      return res.status(400).json({ message: 'User UID is required' });
    }
    const orders = await Order.find({ firebaseUid: uid }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching orders', error: error.message });
  }
};
