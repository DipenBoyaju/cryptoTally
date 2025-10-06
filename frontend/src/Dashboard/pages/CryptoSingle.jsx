import { useParams } from "react-router-dom"
import { useGetAllCoinDataQuery, useGetAllCoinInfoQuery } from "../../apis/coinDataApi"
import SideCard from "../components/SideCard";
import PriceConversion from "../components/PriceConversion";
import CoinChart from "../components/CoinChart";

const CryptoSingle = () => {
  const { id } = useParams()
  const { data: coinData } = useGetAllCoinDataQuery()
  const singleCoin = coinData?.data?.data?.find((coin) => coin.id === Number(id));

  const { data } = useGetAllCoinInfoQuery(id)
  console.log(singleCoin);

  const coin = data?.data?.data?.[id]

  const logo = coin?.logo

  return (
    <div className="text-zinc-300 grid grid-cols-9 ">
      <div className="w-full col-span-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="bg-zinc-700 rounded-full text-zinc-500 text-xs font-semibold p-0.5 px-3">#{singleCoin?.cmc_rank}</p>
            <img src={logo} alt="" className="size-8" />
            <div className="flex items-center gap-1">
              <p className="text-lg font-semibold">{coin?.name}</p>
              <p className="text-sm text-zinc-500 font-semibold">{coin?.symbol}</p>
            </div>
          </div>
          <div className="">
            <h3 className="font-bold text-3xl">${singleCoin?.quote.USD.price.toFixed(2)}</h3>
          </div>
        </div>
        <div className="">
          <CoinChart />
        </div>
      </div>
      <div className="border-l border-zinc-700 col-span-3 px-4">
        <div className="grid grid-cols-2 gap-2">
          <SideCard title="Total supply" value={singleCoin?.circulating_supply} symbol={singleCoin?.symbol} />

          <SideCard title="Max. supply" supply={singleCoin?.infinite_supply ? "∞" : singleCoin?.max_supply} symbol={singleCoin?.symbol} />

          <SideCard title="Market cap" value={singleCoin?.quote.USD.market_cap} volume={singleCoin?.quote?.USD.percent_change_1h.toFixed(2)} />

          <SideCard title="Volume (24h)" value={singleCoin?.quote.USD.volume_24h} volume={singleCoin?.quote?.USD.volume_change_24h.toFixed(2)} />
        </div>
        <SideCard title="Circulating supply" value={singleCoin?.circulating_supply} symbol={singleCoin?.symbol} style="mt-2" />
        <div className="">
          <PriceConversion symbol={coin?.symbol} price={singleCoin?.quote.USD.price} />
        </div>
      </div>
    </div>
  )
}
export default CryptoSingle