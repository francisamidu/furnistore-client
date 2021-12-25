import { CartItem } from "../interfaces";

type CartRequest = {
  cartId: string;
  userId: string;
  products: [CartItem];
};
export default CartRequest;
