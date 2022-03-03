export class OrderRowsDetails {
  id: number;
  productId: number;
  product: string;
  amount: number;
  orderId: number;
  constructor(
    id: number,
    productId: number,
    product: string,
    amount: number,
    orderId: number
  ) {
    this.id = id;
    this.productId = productId;
    this.product = product;
    this.amount = amount;
    this.orderId = orderId;
  }
}
