import React, { useState, useContext } from "react";
import CustomLink from "./Link";
import { ReactComponent as CartIcon } from "../../assets/bag.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as BurgerOpen } from "../../assets/burgermenu.svg";
import { ReactComponent as BurgerClose } from "../../assets/burgermenuclose.svg";
import { motion, AnimatePresence } from "framer-motion";
import "../../../styles.css";
import CartContext from "../../store/CartContext";

const Navbar = ({ onShownCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ctx = useContext(CartContext);
  const totalItemsInCart = ctx.totalItemsInCart();

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  //Mobile
  const MenuMobile = () => {
    const dropIn = {
      hidden: {
        x: "-100%",
        opacity: 1,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          type: "tween",
        },
      },

      exit: {
        x: "-100%",
        opacity: 1,
        transition: {
          duration: 0.6,
          type: "tween",
        },
      },
    };

    return (
      <motion.div
        key={"menu"}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`fixed bg-white top-0 bottom-0 left-0 w-screen h-screen z-[9999] lg:hidden`}
      >
        <div className="p-6 h-full">
          <div>
            <BurgerClose className="cursor-pointer" onClick={handleClose} />
          </div>

          <ul className="flex flex-col text-[22px] font-medium mt-6 h-full gap-6">
            <li className="cursor-pointer border-b border-solid border-[#E8E8E8]">
              <CustomLink onClick={handleClose} to="/">
                Home
              </CustomLink>
            </li>

            <li className="cursor-pointer border-b border-solid border-[#E8E8E8]">
              <CustomLink onClick={handleClose} to="products">
                Products
              </CustomLink>
            </li>
            <li className="cursor-pointer border-b border-solid border-[#E8E8E8]">
              <CustomLink onClick={handleClose} to="#">
                About us
              </CustomLink>
            </li>
            <li className="cursor-pointer border-b border-solid border-[#E8E8E8]">
              <CustomLink onClick={handleClose} to="#">
                Collections
              </CustomLink>
            </li>
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isMenuOpen && <MenuMobile />}
      </AnimatePresence>

      {/* Desktop */}
      <nav className="text-header bg-white font-medium sticky top-0 z-[999]">
        <div className="flex justify-between lg:flex lg: items-center p-6 mx-auto max-w-[1200px]">
          <BurgerOpen
            className="cursor-pointer lg:hidden"
            onClick={handleOpen}
          />

          <div className="cursor-pointer">Concpt</div>

          <ul className="hidden lg:flex justify-between items-center w-96">
            <li className="cursor-pointer ">
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li className="cursor-pointer ">
              <CustomLink to="products">Products</CustomLink>
            </li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Collections</li>
          </ul>
          <div className="flex items-end">
            <SearchIcon className="hidden cursor-pointer mr-3 lg:block" />
            <CartIcon className="cursor-pointer" onClick={onShownCart} />
            <div className="flex items-center justify-center text-[14px] font-medium text-white bg-[#323232] rounded-[50%] w-5 h-5">
              <span>{totalItemsInCart}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
