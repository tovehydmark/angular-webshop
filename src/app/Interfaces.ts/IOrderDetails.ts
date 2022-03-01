import { IOrderRowsDetails } from './IOrderRowsDetails';
import { IUserDetails } from './IUserDetails';

export interface IOrderDetails {
  //Vad innebär det att allt detta ligger i ett objekt i en lista??
  id: number;
  companyId: number;
  created: Date;
  createdBy: IUserDetails;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: IOrderRowsDetails[];
}
