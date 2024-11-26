import { useGetAllCoinDataQuery } from "../../apis/coinDataApi"


const Dashboard = () => {
  const { data } = useGetAllCoinDataQuery()

  console.log("cmc data", data?.data?.data);


  return (
    <div className="w-full  bg-zinc-900 text-white h-screen p-5">
      <h2>Overview</h2>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-5 pt-5">
        <div className="w-full md:w-3/5 space-y-3 border rounded-lg p-4 border-zinc-500">
          <h3 className="font-light text-sm">Total Portfolio</h3>
          <p className="font-semibold text-4xl">$ 35687.45.34</p>
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