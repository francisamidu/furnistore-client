interface CartItem {
  id: string;
  description: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
  categories: Array<string>;
}

export default CartItem;
