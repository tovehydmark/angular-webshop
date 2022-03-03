import { IOrderRowsDetails } from '../Interfaces.ts/IOrderRowsDetails';
import { IUserDetails } from '../Interfaces.ts/IUserDetails';

export class OrderToSend {
  id: Number;
  companyId: number;
  created: Date;
  createdBy: IUserDetails;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: IOrderRowsDetails;
  constructor(
    createdBy: IUserDetails,
    totalPrice: number,
    orderRows: IOrderRowsDetails
  ) {
    this.id = Number();
    this.companyId = 18;
    this.created = new Date();
    this.createdBy = createdBy;
    this.paymentMethod = 'paypal';
    this.totalPrice = totalPrice;
    this.status = 0;
    this.orderRows = orderRows;
  }
}
