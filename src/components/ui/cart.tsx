import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const {products, subtotal, total, totalDiscount} = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  }
  return (
    <div className="flex flex-col gap-8 h-full">
      <Badge className="w-fit gap-2 border-2 border-primary uppercase text-base px-3 py-[0.375rem]" variant="outline">
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5 h-full max-h-full overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (<CartItem key={product.id} product={computeProductTotalPrice(product as any) as any}/>))
            ) : (
              <p className="text-center font-semibold">Carrinho vazio</p>
            )}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-col gap-3">
        <Separator/>

        <div className="flex item-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subtotal.toFixed(2)}</p>
        </div>

        <Separator/>

        <div className="flex item-center justify-between text-xs">
          <p>Entrega</p>
          <p>GRÁTIS</p>
        </div>

        <Separator/>

        <div className="flex item-center justify-between text-xs">
          <p>Desconto</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator/>

        <div className="flex item-center justify-between text-sm font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>

        <Button className="font-bold uppercase mt-7" onClick={handleFinishPurchaseClick}>Finalizar compra</Button>
      </div>
    </div>
  );
}
 
export default Cart;