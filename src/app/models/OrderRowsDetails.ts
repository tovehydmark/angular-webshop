export class OrderRowsDetails {
  id: number;
  productId: number;
  product: null;
  amount: number;
  orderId: number;
  constructor(productId: number, amount: number) {
    this.id = Number();
    this.productId = productId;
    this.product = null;
    this.amount = amount;
    this.orderId = Number();
  }
}
