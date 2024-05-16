import { useContext, useState } from "react";
import Detail from "../context/DetailsContext";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import Recommended from "../components/Recommended";
const Details = () => {
  const { details } = useContext(Detail);
  const [detailsArray, setDetailsArray] = useState([]);
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    setDetailsArray([...detailsArray, details]);
    addToCart(details);
  };
  return (
    <div className="mx-12">
      <div className="mt-12 i flex flex-col justify-center items-center text-center sm:flex-row border-2 p-2 mb-8 ">
        <img className="" width={280} src={details.image} alt="image" />
        <div className="">
          <p className="font-semibold mb-4 text-[1.3rem]">{details.title}</p>
          <p>{details.Description}</p>
          <p className="font-semibold">{details.Price}$</p>
          <NavLink to="/cart">
            <button
              className="bg-black text-white rounded-sm px-2 mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </NavLink>
        </div>
      </div>{" "}
      <Recommended />{" "}
    </div>
  );
};

export default Details;
