import { useEffect, useState } from "react"
import AddCryptoCard from "../components/AddCryptoCard"
import AddCoin from "../components/AddCoin"
import CoinCard from "../components/CoinCard"
import { useGetCoinQuery } from "../../apis/coinApi"
import { useSelector } from "react-redux"
import { useGetAllCoinDataQuery } from "../../apis/coinDataApi"

const List = () => {
  const { currentUser } = useSelector((state) => state.user)

  const [addCoin, setAddCoin] = useState(false)
  const { data } = useGetCoinQuery(currentUser._id)

  const { data: coinData } = useGetAllCoinDataQuery()
  console.log('dcoi', coinData);

  const coinDatas = coinData?.data?.data

  return (
    <div className="w-full text-white">
      <h2 className="text-lg">Crypto List</h2>
      <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          // Make sure coinData is available before mapping
          data?.data?.length > 0 && (
            data?.data?.map((coin) => (
              <CoinCard key={coin.id} purchasedPrice={coin.purchasedPrice} purchasedQuantity={coin.purchasedQuantity} coinData={coinDatas} id={coin.coin} />
            ))
          )
        }

        <AddCryptoCard setAddCoin={setAddCoin} />
      </div>
      {
        addCoin && (<AddCoin setAddCoin={setAddCoin} coinData={coinDatas} />)
      }
    </div>
  )
}
export default List