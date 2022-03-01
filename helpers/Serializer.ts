import { formatCurrency } from ".";
import { Product } from "../interfaces";

class Serializer {
  static serializeProduct(product: any): Product {
    return JSON.parse(
      JSON.stringify({
        id: product?._id,
        colors: product?.colors,
        categories: product?.categories,
        description: product?.description,
        image: product?.image,
        name: product?.name,
        price: formatCurrency(product?.price),
        quantity: product?.quantity,
        sizes: product?.sizes,
      })
    );
  }
  static serializeProducts(products: any[]): Product[] {
    return products?.map((p) => Serializer.serializeProduct(p));
  }
  static serializeOrders(orders: any[]) {}
  static serializeOrder(order: any) {}
  static serializeUser(user: any) {}
  static serializeUsers(users: any[]) {}
}
export default Serializer;
