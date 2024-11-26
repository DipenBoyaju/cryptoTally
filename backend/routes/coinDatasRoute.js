import express from 'express'
import { getCoinDatas, getCoinInfos } from '../controllers/coinDataController.js';


const router = express.Router()

router.route('/getCoinData').get(getCoinDatas)
router.route('/getCoinInfo').get(getCoinInfos)

export default router;