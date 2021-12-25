import { CartItem } from "../interfaces";
import Address from "./Address";

type OrderRequest = {
  orderId: string;
  userId: string;
  products: [CartItem];
  amount: number;
  address: Address;
};
export default OrderRequest;
