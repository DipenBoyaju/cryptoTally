import { useEffect, useState } from "react"
import AddCryptoCard from "../components/AddCryptoCard"
import AddCoin from "../components/AddCoin"
import CoinCard from "../components/CoinCard"
import axios from 'axios'
import { useGetCoinQuery } from "../../apis/coinApi"

const List = () => {

  const [addCoin, setAddCoin] = useState(false)
  const [coinData, setCoinData] = useState([]);
  const { data } = useGetCoinQuery()

  console.log("data", data);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {

            params: {
              vs_currency: "usd", // Specify query parameters
              order: "market_cap_desc",
              per_page: 20,
              page: 1,
              sparkline: false,
            },
          }
        );

        setCoinData(response.data); // Set the fetched data to state
        console.log("response", response.data);

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData(); // Call the async function
  }, []);

  console.log("coindata", coinData);

  return (
    <div className="w-full text-white">
      <h2 className="text-lg">Crypto List</h2>
      <div className="pt-5 grid grid-cols-3 gap-5">
        {
          // Make sure coinData is available before mapping
          data?.data?.length > 0 && (
            data?.data?.map((coin) => (
              <CoinCard key={coin.id} purchasedPrice={coin.purchasedPrice} purchasedQuantity={coin.purchasedQuantity} coinData={coinData} id={coin.coin} />
            ))
          )
        }

        <AddCryptoCard setAddCoin={setAddCoin} />
      </div>
      {
        addCoin && (<AddCoin setAddCoin={setAddCoin} coinData={coinData} />)
      }
    </div>
  )
}
export default List