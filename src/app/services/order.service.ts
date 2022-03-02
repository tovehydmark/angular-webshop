import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderList: Movie[] = [];
  orderList$: Observable<Movie[]> = of(this.orderList);

  constructor() {}

  addMovieToOrder(choosenMovie: Movie) {
    this.orderList.push(choosenMovie);
    //    console.log('From order-service: ' + JSON.stringify(this.orderList));
    console.log(this.orderList);
  }

  removeMovieFromOrder(i: number) {
    this.orderList.splice(i, 1);
  }

  //Skapa ett list-objekt av typen IOrderRowsDetails[] som vi kan pusha till när vi klickar på knappen "add item to basket"

  //Skapa ett list-objekt av typen IOrderDetails som får sin data från checkout (med info från formuläret) samt från orderRows här (Alternativt att orderrows skickas till checkout-komponenten och att hela objektet sen kommer därifrån?? )
}