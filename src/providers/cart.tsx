'use client'

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";


export interface CartProducts extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProducts[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProducts) => void;
  decreaseProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
})

const CartProvider = ({children}: {children: ReactNode}) => {
  const [products, setProducts] = useState<CartProducts[]>([]);

  const addProductToCart = (product: CartProducts) => {
    const productIsAlreadyOnCart = products.some(cartProduct => product.id === product.id)
    if(productIsAlreadyOnCart) {
      setProducts((prev) => prev.map((cartProduct) => {
        if(cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          }
        }
        return cartProduct;
      }))
      return;
    }
    setProducts((prev) => [...prev, product])
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) => prev.map((cartProduct) => {
      if(cartProduct.id === productId) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity - 1,
        }
      }
        return cartProduct;
      }).filter((cartProduct) => cartProduct.quantity > 0),
    );
  }

  
  return (
    <CartContext.Provider value={{products, addProductToCart, decreaseProductQuantity, cartBasePrice: 0, cartTotalDiscount: 0, cartTotalPrice: 0}}>
      {children}
    </CartContext.Provider>
  );
}
 
export default CartProvider;