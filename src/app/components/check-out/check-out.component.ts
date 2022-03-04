import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { OrderRowsDetails } from 'src/app/models/OrderRowsDetails';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  orderList: Movie[] = [];
  //VARIABLE FROM MOVIE: ID (TO USE FOR PRODUCT ID)
  productId: number = 0;

  //VARIABLE FROM MOVIE: FIND PRICE
  moviePrice: number = 0;

  constructor() {}

  ngOnInit(): void {
    //GET LIST OF ORDERS FROM LS
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);
    console.log('HÄR' + JSON.stringify(this.orderList));

    for (let i = 0; i < this.orderList.length; i++) {
      //GETS THE PRODUCT-ID
      this.productId = this.orderList[i].id;
      //console.log(this.productId);

      //GETS THE MOVIE PRICE
      this.moviePrice = this.orderList[i].price;
      //console.log(this.moviePrice);
    }
  }

  confirmOrder() {
    //POST HERE
  }
}
