import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderToSend } from '../models/OrderToSend';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderToSend = new Subject<OrderToSend>();
  orderToSend$ = this.orderToSend.asObservable();

  constructor(private http: HttpClient) {}

  //GETS DATA FROM CHECK-OUT COMPONENT
  confirmOrder(orderToSend: OrderToSend) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('', 'aplication/json');

    return this.http
      .post(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
        orderToSend,
        { headers: httpHeaders }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
