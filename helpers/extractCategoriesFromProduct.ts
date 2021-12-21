import type { Product } from "../interfaces";
import generateId from "./generateId";
const extractCategories = (products: Product[]) => {
  try {
    const tempArray = products
      .map((product: Product) => product?.categories)
      .filter((category: string[]) => !!category)
      .flat(Infinity);
    const tempCategories = Array.from(new Set(tempArray));
    return tempCategories.map((category: any) => ({
      id: generateId(),
      text: category?.toLowerCase(),
    }));
  } catch (error) {
    return [];
  }
};
export default extractCategories;
