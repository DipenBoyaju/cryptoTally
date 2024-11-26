import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { toast } from "react-toastify";
import { useAddCoinMutation } from "../../apis/coinApi";
import { useSelector } from "react-redux";

const AddCoin = ({ setAddCoin, coinData }) => {
  const { currentUser } = useSelector((state) => state.user)
  const [formData, setFormData] = useState({
    purchasedPrice: "",
    purchasedQuantity: "",
    coin: ""
  });

  const [selectedOption, setSelectedOption] = useState(null); // Default to null
  const [coinOptions, setCoinOptions] = useState([]);
  const [addCoin] = useAddCoinMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Map coinData to Select options
    const options = coinData?.map((coin) => ({
      value: coin.id, // Use coin ID as the value
      label: coin.name, // Use coin name as the label
    }));

    setCoinOptions(options);
  }, [coinData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedOption) {
      toast.error("Please select a coin!", { position: "top-right" });
      return;
    }

    const updatedFormData = {
      ...formData,
      coin: selectedOption.value,
      id: currentUser._id
    };

    console.log('updatedFormData', updatedFormData);

    // Log the data being sent
    console.log("Submitting data:", updatedFormData);

    try {
      const response = await addCoin(updatedFormData).unwrap();

      if (response.success) {
        console.log("Response:", response.message);
        setAddCoin(false);
        toast.success(response.message, { position: "top-right" });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error?.data?.message || "An error occurred", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex justify-center items-center backdrop-blur-md absolute top-0 left-0 w-full h-full">
      <div className="bg-white p-8 rounded-lg w-[70vw] md:w-[30vw]">
        <div className="flex text-black justify-between items-center pb-3">
          <h3 className="text-xl">Add Coin</h3>
          <RxCross1
            className="text-2xl cursor-pointer hover:text-orange-500"
            onClick={() => setAddCoin(false)}
          />
        </div>
        <hr />
        <form onSubmit={handleSubmit} className="space-y-4 text-zinc-800 pt-6">
          <div className="">
            <label>Select Coin</label>
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              options={coinOptions}
              className="text-black"
              placeholder="Select Coin"
              isSearchable
            />
          </div>
          <div className="">
            <label>Purchased Amount</label>
            <input
              type="number"
              name="purchasedPrice"
              value={formData.purchasedPrice}
              onChange={handleChange}
              className="border border-zinc-300 rounded-md h-[50px] px-3 focus:border-orange-500 focus:outline-none w-full"
              placeholder="$ Purchased Amount"
            />
          </div>
          <div className="">
            <label>Purchased Quantity</label>
            <input
              type="number"
              name="purchasedQuantity"
              value={formData.purchasedQuantity}
              onChange={handleChange}
              className="border border-zinc-300 rounded-md h-[50px] px-3 focus:border-orange-500 focus:outline-none w-full"
              placeholder="Purchased Quantity"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 w-full p-3 rounded-md text-white text-lg"
          >
            Add Coin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoin;
