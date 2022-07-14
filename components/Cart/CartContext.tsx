import {createContext, ReactNode, useContext, useState} from "react";
import cart from "../../pages/cart";

interface CartItem {
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemToCart: (id: CartItem["id"]) => void;

}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
     children,
  } : {
  children: ReactNode;
  }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addItemToCart = () => {

  }
  return <CartStateContext.Provider value={{
    items: cartItems,
    addItemToCart: (item) => {
      setCartItems((prevState) => {
        const existingItem = prevState.find(
          (existingItem) => existingItem.id === item.id
        );
        if (!existingItem) {
          return [...prevState, item]
        }

        return prevState.map((existingItem) => {
          if (existingItem.id === item.id) {
            return {
              ...existingItem,
              count: existingItem.count + 1,
            };
          }
          return existingItem;
        })
    });
    },
    removeItemToCart: (id) => {
      setCartItems((prevState) => {
        const existingItem = prevState.find(
          (el) => el.id === id
        );

        if (existingItem && existingItem.count <= 1) {
          return prevState.filter((el) => el.id !== id );
        }

        return prevState.map((elItem) => {
          if (elItem.id === id) {
            return {
              ...elItem,
              count: elItem.count - 1,
            };
          }
          return elItem;
        })
    });
    },
  }}>
    {children}
  </CartStateContext.Provider>
}

export const useCartState = () => {
  const cartState = useContext(CartStateContext);

  if (!cartState) {
    throw new Error(`You forgot CartStateContentProvider`);
  }

  return cartState;
}
