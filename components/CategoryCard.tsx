import React, { PropsWithChildren } from "react";

import Link from "next/link";
import Image from "next/image";

type CategoryCardProps = {
  category: {
    name: string;
    image: string;
  };
};

const CategoryCard = (props: PropsWithChildren<CategoryCardProps>) => {
  const { category } = props;
  const { name, image } = category;
  return (
    <div className="block sm:mr-2 mr-0 relative category-card min-w-320 mb-2 sm:mb-0 min-h-370">
      <div className="relative w-full min-h-320">
        <Image src={image} width="200" height="200" layout="fill" />
      </div>
      <div className="w-full">
        <h1 className="text-2xl my-2">Save up to 40% on {name} products</h1>
        <Link href={`/products?category=${encodeURI(name)}`}>
          <a className="border-b-2 hover:border-black border-transparent transition-all duration-150">
            Shop for {name} products
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
