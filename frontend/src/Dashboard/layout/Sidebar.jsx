import { NavLink } from "react-router-dom"
import Logout from "../components/Logout"

const Sidebar = () => {
  return (
    <div className="w-full p-5 h-full text-white">
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <div className="">
            <h3 className="font-semibold text-2xl text-orange-500">CryptoTally</h3>
          </div>
          <div className="pt-10">
            <nav className="text-lg flex flex-col gap-5">
              <NavLink to={'/dashboard'}>Overview</NavLink>
              <NavLink to={'/dashboard/list'}>List</NavLink>
              <NavLink to={'/dashboard/coins'}>Coins</NavLink>
            </nav>
          </div>
        </div>
        <div className="">
          <Logout />
        </div>
      </div>
    </div>
  )
}
export default Sidebar