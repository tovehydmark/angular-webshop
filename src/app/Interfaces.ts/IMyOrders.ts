import { OrderRowsDetails } from '../models/OrderRowsDetails';

export interface IMyOrders {
  id: number;
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRowsDetails[];
}
