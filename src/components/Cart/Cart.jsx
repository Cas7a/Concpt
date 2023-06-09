import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const cartModalContent = (
    <>
      <span>Cart</span>
    </>
  );

  return <Modal onClose={onClose}>{cartModalContent}</Modal>;
};

export default Cart;
