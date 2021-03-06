import { OrderRowsDetails } from './OrderRowsDetails';

export class OrderToSend {
  id: number;
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRowsDetails[];
  constructor(
    createdBy: string,
    totalPrice: number,
    orderRows: OrderRowsDetails[]
  ) {
    this.id = Number();
    this.companyId = 18;
    this.created = new Date(new Date().toString().split('GMT')[0] + ' UTC')
      .toISOString()
      .split('.')[0];
    this.createdBy = createdBy;
    this.paymentMethod = 'Paypal';
    this.totalPrice = totalPrice;
    this.status = 0;
    this.orderRows = orderRows;
  }
}
