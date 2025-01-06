import { useNavigate } from "react-router-dom";
import { useGetAllCoinDataQuery } from "../../apis/coinDataApi"
import { StarIcon } from 'lucide-react';

const Coins = () => {
  const { data } = useGetAllCoinDataQuery()
  const nav = useNavigate()

  return (
    <div>
      <div className="">
        <p className="bg-zinc-950 w-fit text-zinc-200 p-2 px-4 rounded-full">All Crypto</p>
      </div>
      <div className="text-zinc-300 w-full">
        <table className="w-full table-auto border-separate mt-5">
          <thead>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>
              Circulating Supply</th>
            <th></th>
          </thead>
          <tbody>
            {
              data?.data?.data?.slice(0, 10).map((coin) => (
                <tr key={coin.id} className="cursor-pointer hover:bg-zinc-800" onClick={() => nav(`${coin?.id}`)}>
                  <td>{coin?.cmc_rank}</td>
                  <td>{coin?.name}</td>
                  <td>${coin?.quote?.USD.price.toFixed(2)}</td>
                  <td>{coin?.quote?.USD.percent_change_1h.toFixed(2)}%</td>
                  <td>{coin?.quote?.USD.percent_change_24h.toFixed(2)}%</td>
                  <td>{coin?.quote?.USD.percent_change_7d.toFixed(2)}%</td>
                  <td>${coin?.quote?.USD.market_cap.toFixed(2)}</td>
                  <td>${coin?.quote?.USD.volume_24h.toFixed(2)}</td>
                  <td>{coin?.circulating_supply} {coin?.symbol}</td>
                  <td><StarIcon color="yellow" size={16} /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Coins