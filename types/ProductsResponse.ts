import Product from "../interfaces/Product";

type ProductsResponse = {
  data: Promise<{
    products: Product[];
  }>;
};

export default ProductsResponse;
