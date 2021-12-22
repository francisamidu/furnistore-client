import React, { PropsWithChildren } from "react";

import Link from "next/link";

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
    <div
      className="block sm:mr-2 mr-0 relative category-card min-w-320 mb-2 sm:mb-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="category-card-badge bg-black absolute text-white flex flex-row items-center justify-center uppercase px-2 text-sm font-bold">
        <Link href={`/products?category=${encodeURI(name)}`}>
          <a>{name}</a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
