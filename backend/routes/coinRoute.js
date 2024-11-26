import express from 'express'
import { addCoin, getCoins } from '../controllers/coinController.js';
// import { verifyUser } from '../middleware/verifyUser.js';


const router = express.Router()

router.route('/addCoin').post(addCoin)
router.route('/getCoins/:id').get(getCoins)


export default router;