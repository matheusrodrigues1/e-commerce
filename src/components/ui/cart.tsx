import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";

const Cart = () => {
  const {products} = useContext(CartContext);
  return (
    <div>
      <Badge variant="outline">
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.map((product) => (<h1 key={product.id}>{product.name}</h1>))}
    </div>
  );
}
 
export default Cart;