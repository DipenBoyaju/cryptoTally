import express from 'express'
import { addCoin, getCoins } from '../controllers/coinController.js';
import { verifyUser } from '../middleware/verifyUser.js';


const router = express.Router()

router.route('/addCoin').post(verifyUser, addCoin)
router.route('/getCoins').get(verifyUser, getCoins)


export default router;