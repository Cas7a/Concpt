import Modal from "../UI/Modal";
import CINE from "../../assets/cine.png";
import classes from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const cartModalContent = (
    <>
      <>
        <img className={classes.cine} src={CINE} alt="CINE" />
      </>
    </>
  );

  return <Modal onClose={onClose}>{cartModalContent}</Modal>;
};

export default Cart;
