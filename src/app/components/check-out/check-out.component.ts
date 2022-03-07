import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { OrderRowsDetails } from 'src/app/models/OrderRowsDetails';
import { OrderToSend } from 'src/app/models/OrderToSend';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  orderList: Movie[] = [];

  //VARIABLE FROM MOVIE: ID (TO USE FOR PRODUCT ID
  //IN ORDERROWS)
  productId: number = 0;

  //AMOUNT OF SAME MOVIE FOR ORDERROWSDETAILS
  amount: number = 1;

  //VARIABLE FOR CUSTOMER (createdBy:UserDetails[])
  createdBy: UserDetails[] = [];

  //VARIABLE FOR TOTAL PRICE (totalprice:number)
  totalMoviePrice: number = 0;

  //VARIABLE FOR ORDERROWS (orderRows:OrderRowsDetails[])
  // orderRows = new OrderRowsDetails(this.productId, this.amount);
  orderRows: OrderRowsDetails[] = [];

  getOrderRows() {
    let orderRows = new OrderRowsDetails(this.productId, this.amount);
    console.log('orderRows ' + JSON.stringify(orderRows));
    //HÄR BLIR PRODUKT-ID RÄTT MEN NUMBER() I KLASSEN GENERERAR INTE NÅGOT ID...
  }

  constructor() {}

  ngOnInit(): void {
    //GET LIST OF ORDERS FROM LS
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);
    //console.log('HÄR' + JSON.stringify(this.orderList));

    //GET USERDETAILS FROM LS ???
    let createdBy: string = localStorage.getItem('userDetails') || '[]';
    this.createdBy = JSON.parse(createdBy);
    console.log('CreatedBy:' + JSON.stringify(createdBy));

    this.getInfoFromMovie();

    //GET ORDERROWS FROM LS
  }

  //TO EXTRACT PRODUCTID AND PRICE
  getInfoFromMovie() {
    console.log(this.orderList);

    for (let i = 0; i < this.orderList.length; i++) {
      // PRODUCT-ID
      this.productId = this.orderList[i].id;

      // PRICE OF ALL MOVIES IN BASKET TOGEHER
      this.totalMoviePrice = this.totalMoviePrice + this.orderList[i].price;
    }
  }

  confirmOrder() {
    console.log(this.orderRows);

    this.getOrderRows();

    //POST HERE
  }
}
