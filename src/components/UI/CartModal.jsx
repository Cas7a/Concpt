import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { MinicartContext } from "../../store/MinicartContext";

const Backdrop = ({ onClose }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-[100vh] z-[9999] bg-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
};

const CartModal = ({ children, onClose }) => {
  const minicartCtx = useContext(MinicartContext);

  const dropIn = {
    hidden: {
      x: "100%",
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
      x: "100%",
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "tween",
      },
    },
  };

  return (
    <>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {minicartCtx.cartIsShown && (
          <>
            <Backdrop onClose={onClose} />
            <motion.div
              className={`fixed top-0 bottom-0 right-0 w-screen h-screen bg-white shadow-modal z-[9999] lg:w-[507px]`}
              key="minicart"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropIn}
            >
              <div className="flex flex-col h-full pb-20 pl-6 pr-6">
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartModal;
