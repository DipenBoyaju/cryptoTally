import express from 'express'
import { getCoinDatas } from '../controllers/coinDataController.js';


const router = express.Router()

router.route('/getCoinData').get(getCoinDatas)

export default router;