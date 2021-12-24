import { Product } from ".";

interface CartProduct extends Product {
  color: string;
  size: string;
}

export default CartProduct;
