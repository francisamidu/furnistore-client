import { Product } from "../interfaces";
import Address from "./Address";

type Order = {
  _id: string;
  userId: string;
  products: Product[];
  amount: number;
  address: Address;
  status: string;
  isDeleted: boolean;
};
export default Order;
