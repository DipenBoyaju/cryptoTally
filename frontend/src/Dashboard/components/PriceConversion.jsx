import { useState } from "react";


const PriceConversion = ({ symbol, price }) => {

  const [usdValue, setUsdValue] = useState(price.toFixed(2));
  const [cryptoValue, setCryptoValue] = useState(1);

  const handleUsdChange = (e) => {
    const input = e.target.value;

    // Allow only numbers and one decimal point
    if (/^\d*\.?\d*$/.test(input)) {
      setUsdValue(input);

      const parsedValue = parseFloat(input);
      if (!isNaN(parsedValue)) {
        setCryptoValue((parsedValue / price).toFixed(8));
      } else {
        setCryptoValue("");
      }
    }
  };

  const handleCryptoChange = (e) => {
    const input = e.target.value;

    if (/^\d*\.?\d*$/.test(input)) {
      setCryptoValue(input);

      const parsedValue = parseFloat(input);
      if (!isNaN(parsedValue)) {
        setUsdValue((parsedValue * price).toFixed(2));
      } else {
        setUsdValue("");
      }
    }
  };

  return (
    <div className="mt-5">
      <p className="font-semibold text-sm">{symbol} to USD Conversion</p>
      <div className="border-2 border-zinc-700 rounded-md bg-transparent mt-2">
        <div className="flex gap-2 p-1">
          <p className="text-sm font-semibold">{symbol}</p>
          <input type="text" className="bg-transparent w-full text-right" defaultValue={price} value={cryptoValue} onChange={handleCryptoChange} />
        </div>
        <hr className="border-zinc-700" />
        <div className="flex gap-2 p-1">
          <p className="text-sm font-semibold">USD</p>
          <input type="text" className="bg-transparent w-full focus:outline-none text-right" defaultValue={1} value={usdValue} onChange={handleUsdChange} />
        </div>
      </div>
    </div>
  )
}
export default PriceConversion