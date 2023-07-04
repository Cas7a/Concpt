//Context to show or hide minicart

import { createContext, useState } from "react";

export const MinicartContext = createContext({
  showMinicart: () => {},
  hideMinicart: () => {},
});

export const MinicartProvider = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showMinicart = {
    cartIsShown,
    showMinicart: showCartHandler,
    hideMinicart: hideCartHandler,
  };

  return (
    <MinicartContext.Provider value={showMinicart}>
      {children}
    </MinicartContext.Provider>
  );
};
