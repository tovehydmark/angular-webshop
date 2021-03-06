import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  myOrderList: Movie[] = [];
  inCheckOut: boolean = false;

  constructor() {}

  ngOnInit(): void {
    //LOCAL STORAGE
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.myOrderList = JSON.parse(orderList);
  }

  removeMovie(i: number) {
    this.myOrderList.splice(i, 1);
    localStorage.setItem('orderList', JSON.stringify(this.myOrderList));
  }

  goToCheckout() {
    this.inCheckOut = true;
  }
}
