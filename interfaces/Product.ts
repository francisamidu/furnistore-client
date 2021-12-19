export default interface Product {
  id: string;
  description: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: string;
  image: string;
  isDeleted: boolean;
  categories: Array<string>;
}
