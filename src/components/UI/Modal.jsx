import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useState } from "react";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200); // Tiempo de duración de la animación en milisegundos
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={handleClose} />, portalElement)}
      {ReactDOM.createPortal(
        <div
          className={`${classes.modal} ${
            isClosing && classes["modal-slide-out"]
          }`}
        >
          {children}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
