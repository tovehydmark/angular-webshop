import { DatePipe } from '@angular/common';
import { IOrderRowsDetails } from '../Interfaces.ts/IOrderRowsDetails';
import { IUserDetails } from '../Interfaces.ts/IUserDetails';
import { OrderRowsDetails } from './OrderRowsDetails';
import { UserDetails } from './UserDetails';

export class OrderToSend {
  id: Number;
  companyId: number;
  created: string;
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
