import { IOrderRowsDetails } from '../Interfaces.ts/IOrderRowsDetails';
import { IUserDetails } from '../Interfaces.ts/IUserDetails';
import { OrderRowsDetails } from './OrderRowsDetails';
import { UserDetails } from './UserDetails';

export class OrderToSend {
  id: Number;
  companyId: number;
  created: Date;
  createdBy: UserDetails[];
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRowsDetails[];
  constructor(
    createdBy: UserDetails[],
    totalPrice: number,
    orderRows: OrderRowsDetails[]
  ) {
    this.id = Number();
    this.companyId = 18;
    this.created = new Date();
    this.createdBy = createdBy;
    this.paymentMethod = 'Paypal';
    this.totalPrice = totalPrice;
    this.status = 0;
    this.orderRows = orderRows;
  }
}
