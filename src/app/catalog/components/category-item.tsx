import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({category}: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-category-item-gradient">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{
            objectFit: 'contain'
          }}
        />
      </div>

      <div className="bg-accent py-3 rounded-br-lg rounde-bl-lg">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  );
}
 
export default CategoryItem;