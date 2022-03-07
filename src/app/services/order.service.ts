import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Movie } from '../models/Movie';
import { OrderToSend } from '../models/OrderToSend';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  //Skapa ett ready-order objekt som vi sen kan skicka med post
  private orderToSend = new Subject<OrderToSend>();
  orderToSend$ = this.orderToSend.asObservable();
  //Hämta orderlist från
  //Hämta userInfo från customer-form
  //Skicka ready-order till api:et med post

  constructor(private http: HttpClient) {}

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
