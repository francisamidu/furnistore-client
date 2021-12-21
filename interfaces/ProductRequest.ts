export default interface ProductRequest {
  description: string;
  name: string;
  colors: string[];
  sizes: string[];
  price: number;
  quantity: number;
  image: string | any;
  categories: Array<string>;
}
