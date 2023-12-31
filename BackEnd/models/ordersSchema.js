import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  products: [{  }], // ref: connection with with products collection.
  totalPrice: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },// ref: connection with with user collection.
});

const OrderModel = model("Order", OrderSchema);

export default OrderModel;
