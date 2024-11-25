import mongoose, { mongo } from "mongoose";

const coinSchema = new mongoose.Schema({
  coin: {
    type: String,
    required: true,
  },
  purchasedPrice: {
    type: Number,
    required: true,
  },
  purchasedQuantity: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

const Coins = mongoose.model('Coin', coinSchema)

export default Coins;