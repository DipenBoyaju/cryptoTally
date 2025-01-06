import { useSelector } from "react-redux"
import { useGetCoinQuery } from "../../apis/coinApi"


const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user)

  const { data } = useGetCoinQuery(currentUser._id)

  const totalPortfolio = data?.data?.reduce((total, coin) => {
    const { purchasedPrice, purchasedQuantity } = coin;
    return total + purchasedPrice * purchasedQuantity;
  }, 0) || 0;

  return (
    <div className="w-full  bg-zinc-900 text-white h-screen p-5">
      <h2>Overview</h2>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-5 pt-5">
        <div className="w-full md:w-3/5 space-y-3 border rounded-lg p-4 border-zinc-500">
          <h3 className="font-light text-sm">Total Portfolio</h3>
          <p className="font-semibold text-4xl">$ {totalPortfolio}</p>
        </div>
        <div className="w-full md:w-2/5 space-y-3 border rounded-lg p-4 border-zinc-500">
          <h3 className="font-light text-sm">Return On Investment</h3>
          <p className="font-semibold text-4xl">$ 1234.40</p>
        </div>
      </div>
    </div>
  )
}
export default Dashboard