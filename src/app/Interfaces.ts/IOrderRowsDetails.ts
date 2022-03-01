export interface IOrderRowsDetails {
  id: number;
  productId: number;
  product: string;
  amount: number;
  orderId: number; //Same as id in orderDetails interface
}
