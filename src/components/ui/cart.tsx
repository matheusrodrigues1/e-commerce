import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const {products} = useContext(CartContext);
  return (
    <div className="flex flex-col gap-8">
      <Badge className="w-fit gap-1 border-2 border-primary uppercase text-base px-3 py-[0.375rem]" variant="outline">
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((product) => (<CartItem key={product.id} product={computeProductTotalPrice(product as any) as any}/>))}
      </div>
    </div>
  );
}
 
export default Cart;