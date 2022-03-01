type OrderListProps = {
  orders: {
    id: string;
    orderId: string | number;
    date: Date | string;
    productName: string;
    productPrice: number | string;
    status: string;
  }[];
};

export default OrderListProps;
