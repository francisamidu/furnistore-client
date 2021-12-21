export default interface Product {
  id: string;
  description: string;
  name: string;
  colors: string[];
  sizes: string[];
  price: number;
  quantity: number;
  image: string;
  isDeleted: boolean;
  categories: Array<string>;
}
