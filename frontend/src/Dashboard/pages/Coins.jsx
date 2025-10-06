import { useGetAllCoinDataQuery } from "../../apis/coinDataApi"
import CryptoListCard from "../components/CryptoListCard";

const Coins = () => {
  const { data } = useGetAllCoinDataQuery()
  return (
    <div>
      <div className="">
        <p className="bg-zinc-950 w-fit text-zinc-200 p-2 px-4 rounded-full">All Crypto</p>
      </div>
      <div className="text-zinc-300 w-full">
        <table className="w-full table-auto border-collapse mt-5">
          <thead className="bg-yellow-500">
            <th>#</th>
            <th className="py-2">Name</th>
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
              data?.data?.data?.slice(0, 20).map((coin) => (
                <CryptoListCard coin={coin} key={coin?.id} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Coins