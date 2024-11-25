import chart from '../../assets/images/chart.png'
import { GoDash } from "react-icons/go";
import { IoTrendingDownOutline, IoTrendingUpOutline } from "react-icons/io5";

const CoinCard = ({ purchasedPrice, purchasedQuantity, coinData, id }) => {
  console.log("cd", coinData);
  const coin = coinData?.find((coin) => coin.id === id);
  console.log("coin", coin);

  const valueChange = ((coin?.current_price - purchasedPrice) * purchasedQuantity)
  return (
    <div className="bg-zinc-700 rounded-xl p-4">
      <div className="flex items-center justify-between border-b border-zinc-500 pb-2">
        <div className="flex items-center gap-2">
          <img src={coin?.image} alt="" className="size-8" />
          <p>{coin?.name}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase">{coin?.symbol}</p>
          <p className='text-lg'>$ {coin?.current_price}</p>
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
          <select name="" id="" className='bg-transparent text-zinc-300'>
            <option value="">24 Hrs</option>
            <option value="">1 Min</option>
            <option value="">3 Min</option>
            <option value="">5 Min</option>
            <option value="">15 Min</option>
            <option value="">30 Min</option>
            <option value="">24 Hrs</option>
          </select>
        </div>
      </div>
      <div className="pb-4">
        <img src={chart} alt="" />
      </div>
      <div className="flex justify-between">
        <p className='text-[12px]'>Quantity : </p>
        <p className='text-sm'>{purchasedQuantity}</p>
      </div>
      <div className="flex flex-row gap-2 pt3 items-center">
        <div className={`bg-zinc-800 rounded-lg py-3 px-4 w-full text-center flex justify-center items-center gap-2 ${valueChange > 0 ? 'text-green-400' : valueChange === 0 ? "text-gray-600" : "text-red-500"}`}>
          <p className='text-2xl'>{valueChange > 0 ? <IoTrendingUpOutline /> : <IoTrendingDownOutline />}</p>
          <p className="">
            {valueChange > 0 ? 'Profit' : valueChange === 0 ? "default" : "Loss"} : <span className='text-lg font-semibold'>$ {valueChange}</span></p>
        </div>
        {/* <div className="w-1/5 text-right">
          <p className='text-[12px]'>Duration</p>
          <select name="" id="" className='bg-transparent text-zinc-300'>
            <option value="">1 Min</option>
            <option value="">3 Min</option>
            <option value="">5 Min</option>
            <option value="">15 Min</option>
            <option value="">30 Min</option>
          </select>
        </div> */}
      </div>
    </div>
  )
}
export default CoinCard