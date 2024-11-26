import { GoDash } from "react-icons/go";
import { IoTrendingDownOutline, IoTrendingUpOutline } from "react-icons/io5";
import { useGetAllCoinInfoQuery } from '../../apis/coinDataApi';
import { useEffect, useState } from 'react';

const CoinCard = ({ purchasedPrice, purchasedQuantity, coinData, id }) => {
  const [changePercent, setChangePercent] = useState("1hrs")
  const [changeRate, setChangeRate] = useState(null);

  const coin = coinData?.find((coin) => coin.id === Number(id));

  const { data: coinInfo } = useGetAllCoinInfoQuery(id)
  const logo = coinInfo?.data?.data?.[id]?.logo

  const currentPrice = coin?.quote.USD.price

  useEffect(() => {
    if (changePercent === "1hrs") {
      const rate = coin?.quote.USD.percent_change_1h;
      setChangeRate(rate)
    } else if (changePercent === "24hrs") {
      const rate = coin?.quote.USD.percent_change_24h
      setChangeRate(rate)
    } else if (changePercent === "7days") {
      const rate = coin?.quote.USD.percent_change_7d
      setChangeRate(rate)
    } else if (changePercent === "30days") {
      const rate = coin?.quote.USD.percent_change_30d
      setChangeRate(rate)
    } else if (changePercent === "90days") {
      const rate = coin?.quote.USD.percent_change_90d
      setChangeRate(rate)
    }
  }, [coin, changeRate, changePercent])

  const valueChange = ((currentPrice - purchasedPrice) * purchasedQuantity)

  return (
    <div className="bg-zinc-700 rounded-xl p-4">
      <div className="flex items-center justify-between border-b border-zinc-500 pb-2">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="size-8" />
          <p>{coin?.name}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase">{coin?.symbol}</p>
          <p className='text-lg'>$ {currentPrice?.toFixed(8)}</p>
        </div>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="">
          <p className="text-[12px] text-left">Purchased Price</p>
          <p>$ {purchasedPrice}</p>
        </div>
        <div className="">
          <GoDash className='rotate-90 text-3xl' />
        </div>
        <div className="text-right">
          <p className='text-[12px]'>Duration</p>
          <select name="" id="" className='bg-transparent text-zinc-300 focus:outline-none' onChange={(e) => setChangePercent(e.target.value)}>
            <option value="1hrs">1 Hrs</option>
            <option value="24hrs">24 Hrs</option>
            <option value="7days">7 Day</option>
            <option value="30days">30 Day</option>
            <option value="60days">60 Day</option>
            <option value="90days">90 Day</option>
          </select>
          <p className={`${changeRate < 0 ? 'text-red-500' : 'text-green-500'}`}>{changeRate?.toFixed(2)}%</p>
        </div>
      </div>
      <div className="py-4 w-full">
        <img src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${id}.svg`} alt="" className={`w-full ${valueChange > 0 ? '[filter:hue-rotate(85deg)_saturate(80%)_brightness(0.85)]' : '[filter:hue-rotate(300deg)_saturate(210%)_brightness(0.7)_contrast(170%)]'}`} />
      </div>
      <div className="flex justify-between">
        <p className='text-[12px]'>Quantity : </p>
        <p className='text-sm'>{purchasedQuantity}</p>
      </div>
      <div className="flex flex-row gap-2 pt3 items-center">
        <div className={`bg-zinc-800 rounded-lg py-3 px-4 w-full text-center flex justify-center items-center gap-2 ${valueChange > 0 ? 'text-green-400' : valueChange === 0 ? "text-gray-600" : "text-red-500"}`}>
          <p className='text-2xl'>{valueChange > 0 ? <IoTrendingUpOutline /> : <IoTrendingDownOutline />}</p>
          <p className="">
            {valueChange > 0 ? 'Profit' : valueChange === 0 ? "default" : "Loss"} : <span className='text-lg font-semibold'>$ {valueChange?.toFixed(8)}</span></p>
        </div>
      </div>
    </div>
  )
}
export default CoinCard