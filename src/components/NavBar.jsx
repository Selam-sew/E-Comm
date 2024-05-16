import { NavLink } from "react-router-dom";
import Logo from "../../public/logo-black.svg";
import hamburger from "../../public/hamburger.png";
import cart from "../../public/assets/icons/cart.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const { cartItems } = useCart();
  const [clicked, setClicked] = useState(true);
  const toggleButtonRef = useRef(null);
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setClicked(true);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return (
    <ul className="flex justify-between font-serif sm:mx-[4rem]  font-regular mx-5 text-[1.2rem] mt-3 ">
      <li>
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </li>
      <li className="hidden md:flex gap-[5rem]">
        <NavLink className="text-red" to="/">
          Home
        </NavLink>
        <NavLink to="/shop">shop</NavLink>

        <NavLink to="/cart">
          <img src={cart} alt="icons" />
          {cartItems.length > 0 && (
            <span className="relative bottom-9 text-white bg-red-500 rounded-[50%] px-1 left-4">
              {cartItems.length}
            </span>
          )}
        </NavLink>
      </li>
      <img
        className="md:hidden cursor-pointer bottom-[7.4rem] "
        onClick={handleClick}
        src={hamburger}
        width={30}
        ref={toggleButtonRef}
        alt="hamburger menu icon"
      />
      <li
        className={`md:hidden
         flex flex-col absolute right-0 gap-3 bg-white mr-5 top-[3.3rem] border-[0.1rem] px-4`}
      >
        <div className={`${clicked ? "hidden" : ""} flex flex-col gap-3 `}>
          <NavLink className="border-b" to="/">
            Home
          </NavLink>
          <NavLink to="/shop" className="border-b">
            shop
          </NavLink>
          <NavLink to="/cart">
            <img src={cart} alt="icons" />
            {cartItems.length > 0 && (
              <span className="relative bottom-10 text-white  bg-red-500 rounded-[50%] px-1 left-4">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        </div>
      </li>
    </ul>
  );
}
