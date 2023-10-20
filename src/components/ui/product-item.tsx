import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className="bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt={product.name}
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
      <div>
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
      </div>
    </div>
   );
}
 
export default ProductItem;