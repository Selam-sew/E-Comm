import { useState } from "react";
import { useCart } from "../context/CartContext"; // Import useCart

export default function Cart() {
  const { cartItems } = useCart();
  let inputData = Array(cartItems.length).fill(0);
  const [inputValues, setInputValues] = useState(inputData);
  const [price, setPrice] = useState(0);

  const handlePlus = (index) => {
    setInputValues((inputValues) => {
      const newValue = [...inputValues];
      newValue[index]++;
      return newValue;
    }, handlePrice); // Call handlePrice after updating the state
  };
  const handleMinus = (index) => {
    setInputValues((inputValues) => {
      const newValues = [...inputValues];
      if (newValues[index] > 0) newValues[index] -= 1; // Also allow reducing to 0
      return newValues;
    }, handlePrice); // Call handlePrice after updating the state
  };

  const handlePrice = () => {
    const totalPrice = cartItems.reduce((acc, item, index) => {
      return acc + inputValues[index] * item.Price;
    }, 0);
    setPrice(totalPrice);
  };
  const handleDelete = (item) => {
    return cartItems.filter((items) => items !== item.price);
  };
  const handleclick1 = (index) => {
    handleMinus(index);
    handlePrice();
  };
  const handleclick2 = (index) => {
    handlePlus(index);
    handlePrice();
  };

  return (
    <div className="mt-10 p-2 bg-[#E6E5E5] mx-4 sm:mx-12    pb-[19.2rem]">
      <h2 className="font-semibold text-[1.5rem] mb-7">Cart</h2>
      {cartItems.map((item, index) => (
        <div
          key={index.id}
          className="grid border-b border-black lg:grid-cols-2 pb-2 mb-[2rem] "
        >
          <div className="flex gap-2">
            <img src={item.image} alt="electronics-image" width={80} />
            <p className="font-semibold ">{item.title}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-8 ml-3 lg:mt-0 sm:gap-[4rem] items-center">
            <div className="flex flex-col justify-center items-center ">
              <label htmlFor={`number`} className="relative sm:bottom-6">
                Items
              </label>
              <div className="flex sm:flex-row justify-center items-center ">
                <span
                  onClick={() => handleclick2(index)}
                  className="bg-blue-500 cursor-pointer px-3 py-1 mr-1"
                >
                  +
                </span>
                <input
                  type="number"
                  onChange={(e) => {
                    let value = [...inputValues];
                    value[index] = e.target.value;
                    setInputValues(value);
                  }}
                  placeholder="0"
                  value={inputValues[index]}
                  className="border-[0.1rem]  py-1 bg-[#E6E5E]"
                />
                <span
                  onClick={() => handleclick1(index)}
                  className="px-3 py-1 cursor-pointer ml-1 bg-white"
                >
                  -
                </span>{" "}
              </div>
            </div>

            <div className="flex text-center sm:flex-col justify-between">
              <p className="relative sm:bottom-6">Price</p>
              <p>{item.Price}$</p>
            </div>
          </div>
        </div>
      ))}{" "}
      <div className="font-semibold">Total Amount: {price} $$</div>{" "}
    </div>
  );
}
