import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    firebaseUid: { type: String, required: true },
    userEmail: { type: String, required: true },
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true }
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        }
      }
    ],
    totalPrice: { type: Number, required: true }
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
