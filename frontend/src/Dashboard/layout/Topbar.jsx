import { RxGear } from "react-icons/rx";
import { GoBell } from "react-icons/go";
import { useSelector } from "react-redux";

const Topbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-zinc-800 p-4 flex items-center justify-between">
      <div className="text-zinc-400 capitalize">
        Crypto Investment {currentUser.fullname}
      </div>
      <div className="flex items-center justify-between gap-5">
        <div className="">
          <GoBell className="text-2xl text-zinc-300" />
        </div>
        <div className="">
          <RxGear className="text-2xl text-zinc-300" />
        </div>
        <div className="size-10 rounded-full overflow-hidden">
          <img src={currentUser.profilePicture} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Topbar