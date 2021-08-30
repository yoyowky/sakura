import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
{
    orderItems: [
        {
          name: { type: String, required: true },
          qty: { type: Number, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          product: { // another model
            type: mongoose.Schema.Types.ObjectId, // use model id as type
            ref: 'Product', // model name
            required: true,
          },
        },
      ],
      shippingAddress: {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
      },
      paymentMethod: { type: String, required: true },
      itemsPrice: { type: Number, required: true },
      shippingPrice: { type: Number, required: true },
      taxPrice: { type: Number, required: true },
      totalPrice: { type: Number, required: true },
      user: { // use User model
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true },
      isPaid: { type: Boolean, default: false },
      paidAt: { type: Date },
      isDelivered: { type: Boolean, default: false },
      deliveredAt: { type: Date },
},{
    timestamps: true,
})

const Order = mongoose.model('order', orderSchema);

export default Order;
