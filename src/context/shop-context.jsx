import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
// import { PRODUCTS_DATA } from "../data";
const ShopContext = createContext();

const cartReducer = (cartStored, action) => {
  switch (action.type) {
    /* ==================================================================== */
    case "ADD_TO_CART":
      const isExisted = cartStored.find(
        (item) => item.id === action.payload.id
      );
      if (isExisted) {
        return cartStored.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cartStored, { ...action.payload, quantity: 1 }];
      }
    /* ==================================================================== */
    case "REMOVE_FROM_CART":
      return cartStored.filter((item) => item.id !== action.payload);
    /* ==================================================================== */
    case "INCREASE_QUANTITY":
      return cartStored.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity + 1 }
          : item
      );
    /* ==================================================================== */
    case "DECREASE_QUANTITY":
      return cartStored
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    /* ==================================================================== */
    case "CLEAR_CART":
      return (cartStored = []);
    default:
      return cartStored;
  }
};

const ShopProvider = (props) => {
  const [cartStored, dispatch] = useReducer(cartReducer, [], () => {
    const localVal = JSON.parse(localStorage.getItem("PRODUCTS_CART"));
    return localVal ? localVal : [];
  });
  const [noti, setNoti] = useState(false);

  // STORED DATA IN localStorage
  useEffect(() => {
    localStorage.setItem("PRODUCTS_CART", JSON.stringify(cartStored));
  }, [cartStored]);

  // SHOW CURRENT PRICE
  const currentPrice = cartStored.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // SHOW TOTAL PRICE (PLUS SHIP_PRICE)
  const shipPrice = 15000;
  const totalPrice = currentPrice + shipPrice;

  // ADD PRODUCT TO CART
  const handleAddToCart = (productItem) => {
    dispatch({ type: "ADD_TO_CART", payload: productItem });
  };

  // REMOVE PRODUCT FROM CART
  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  // INCREASE PRODUCT QUANTITY
  const handleIncreaseQuantity = (productItem) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: productItem });
  };

  // DECREASE PRODUCT QUANTITY
  const handleDecreaseQuantity = (productItem) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: productItem });
  };

  // CLEAR CART
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    setNoti(true);
    setTimeout(() => {
      setNoti(false);
    }, 1000);
  };

  /* =================================================================================== */
  const value = {
    cartStored,
    dispatch,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleClearCart,
    totalPrice,
    currentPrice,
    noti,
  };

  return <ShopContext.Provider value={value} {...props}></ShopContext.Provider>;
};

function useShop() {
  const context = useContext(ShopContext);
  if (typeof context === "undefined")
    throw new Error("useShop must be used within ShopProvider");
  return context;
}

export { useShop, ShopProvider };
