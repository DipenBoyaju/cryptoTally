import { GoPlusCircle } from "react-icons/go";

const AddCryptoCard = ({ setAddCoin }) => {

  return (
    <div className="border border-dashed border-orange-500 p-5 flex justify-center items-center flex-col gap-5 cursor-pointer hover:bg-white/5 transition-all duration-500 rounded-lg" onClick={() => setAddCoin(true)}>
      <GoPlusCircle className="text-5xl text-orange-200" />
      <p className="text-orange-500">Add Coin</p>
    </div>
  )
}
export default AddCryptoCard