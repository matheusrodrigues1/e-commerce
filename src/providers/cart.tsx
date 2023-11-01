'use client'

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";


interface CartProducts extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProducts[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProducts) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
})

const CartProvider = ({children}: {children: ReactNode}) => {
  const [products, setProducts] = useState<CartProducts[]>([]);

  const addProductToCart = (product: CartProducts) => {
    setProducts((prev) => [...prev, product])
  }
  return (
    <CartContext.Provider value={{products, addProductToCart, cartBasePrice: 0, cartTotalDiscount: 0, cartTotalPrice: 0}}>
      {children}
    </CartContext.Provider>
  );
}
 
export default CartProvider;