export default interface ProductRequest {
  description: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string | any;
  categories: Array<string>;
}
