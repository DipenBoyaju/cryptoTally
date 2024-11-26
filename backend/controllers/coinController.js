import Coins from "../models/CoinModel.js";


export const addCoin = async (req, res) => {
  const { coin, purchasedPrice, purchasedQuantity, id } = req.body;

  // const userId = req.user.id;

  // if (!userId) {
  //   return res.status(401).json({
  //     success: false,
  //     message: 'Unauthorized',
  //   });
  // }

  if (!coin || !purchasedPrice || !purchasedQuantity) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  if (purchasedPrice <= 0 || purchasedQuantity <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Price and quantity must be positive values',
    });
  }

  try {
    const newCoin = new Coins({
      coin,
      purchasedPrice,
      purchasedQuantity,
      user: id,
    });

    await newCoin.save();

    return res.status(201).json({
      success: true,
      message: 'Coin Added',
      data: newCoin,
    });
  } catch (error) {
    console.error('Error adding coin:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}

export const getCoins = async (req, res) => {
  const { id } = req.params;
  try {
    const coins = await Coins.find({ user: id })

    return res.status(200).json({
      success: true,
      data: coins,
    });

  } catch (error) {
    console.error('Error fetching coins:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}