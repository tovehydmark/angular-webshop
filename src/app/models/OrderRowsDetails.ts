export class OrderRowsDetails {
  id: number;
  productId: number;
  product: string;
  amount: number;
  orderId: number;
  constructor(productId: number, product: string, amount: number) {
    this.id = Number();
    this.productId = productId;
    this.product = product;
    this.amount = amount;
    this.orderId = Number();
  }
}
