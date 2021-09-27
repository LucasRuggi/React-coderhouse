import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState("");

  useEffect(() => {
    const amount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartAmount(amount);
  }, [cart]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cart];

      updateQty.map((element) => {
        if (element.item.id === item.id) {
          return (element.quantity += quantity);
        }
      });
      setCart(updateQty);
    } else {
      return setCart([...cart, { item, quantity }]);
    }
  };

  // FUNCION CUANDO QUERES AGREGAR UN PRODUCTO QUE YA ESTA EN EL CARRITO CRASHEA
  // const addItem = (item, quantity) => {
  //   if (isInCart(item.id)) {
  //     setCart(
  //       [...cart].map((qty) => {
  //         if (qty.item.id === item.id) {
  //           return (qty.quantity += quantity);
  //         }
  //         return setCart(qty);
  //       })
  //     );
  //   } else {
  //     return setCart([...cart, { item, quantity }]);
  //   }
  // };

  const isInCart = (id) => cart.find((element) => element.item.id === id);

  const clearCart = () => setCart([]);

  const removeItem = (id) => {
    const cartFilter = cart.filter((element) => element.item.id !== id);
    setCart(cartFilter);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clearCart, removeItem, cartAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}
