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
}
