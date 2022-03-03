import { UserDetails } from '../models/UserDetails';
import { IOrderRowsDetails } from './IOrderRowsDetails';
import { IUserDetails } from './IUserDetails';

export interface IOrderDetails {
  //Vad innebär det att allt detta ligger i ett objekt i en lista??
  id: number;
  companyId: number;
  created: Date;
  createdBy: UserDetails[];
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: IOrderRowsDetails[];
}
