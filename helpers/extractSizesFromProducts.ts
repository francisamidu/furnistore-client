import type { Product } from "../interfaces";
const extractSizes = (products: Product[]) => {
  try {
    const tempSizes = products
      .map((product: Product) => product.sizes)
      .flat(Infinity);
    const flatArray: any = Array.from(new Set(tempSizes));
    return [...flatArray];
  } catch (error) {
    return [];
  }
};
export default extractSizes;
