import { Product } from "../interfaces";

type Order = {
  _id: string;
  userId: string;
  products: Product[];
  amount: number;
  address: {
    phone: string;
    city: string;
    address: string;
    isDeleted: boolean;
  };
  status: string;
  isDeleted: boolean;
};
export default Order;
