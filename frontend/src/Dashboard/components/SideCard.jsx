import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const SideCard = ({ title, value, supply, symbol, volume }) => {

  const formatValue = (num) => {
    if (num >= 1_000_000_000_000) {
      return (num / 1_000_000_000_000).toFixed(1) + "T";
    }
    else if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1) + "B";
    }
    else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + "M";
    }
    else if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + "K";
    } else {
      return num;
    }
  };
  return (
    <div className="border border-zinc-700 rounded-lg py-2 flex flex-col justify-center items-center space-y-1">
      <p className="font-semibold text-xs text-zinc-400">{title}</p>
      <div className="flex items-center">
        <p className="font-semibold">{value ? formatValue(value) : formatValue(supply)} {supply !== '∞' ? symbol : ''} </p>
        <p className={`text-sm flex items-center ${volume > 0 ? 'text-green-500' : 'text-red-500'} `}>{
          volume ? (
            <>
              {volume > 0 ? <MdOutlineArrowDropUp className="text-lg" /> : <MdOutlineArrowDropDown className="text-lg" />}${volume}%
            </>
          ) : ''}</p>
      </div>
    </div>
  )
}
export default SideCard