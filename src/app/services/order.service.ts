import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMyOrders } from '../Interfaces.ts/IMyOrders';
import { OrderToSend } from '../models/OrderToSend';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderToSend = new Subject<OrderToSend>();
  orderToSend$ = this.orderToSend.asObservable();

  private fetchedOrders = new Subject<IMyOrders[]>();
  fetchedOrders$ = this.fetchedOrders.asObservable();

  constructor(private http: HttpClient) {}

  //GETS DATA FROM CHECK-OUT COMPONENT TO USE FOR POST
  confirmOrder(orderToSend: OrderToSend) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('', 'aplication/json');

    return this.http
      .post(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
        orderToSend,
        { headers: httpHeaders }
      )
      .subscribe((data) => {});
  }

  //FETCH ORDERS FROM ORDER API
  getOrders(): void {
    this.http
      .get<IMyOrders[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=18'
      )
      .subscribe((response: IMyOrders[]) => {
        this.fetchedOrders.next(response);
      });
  }

  //ENABLES FOR ADMIN TO REMOVE ORDERS
  deleteOrder(orderToDelete: number) {
    this.http
      .delete(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' +
          orderToDelete +
          '?companyId=18'
      )
      .subscribe(() => this.getOrders());
  }
}
