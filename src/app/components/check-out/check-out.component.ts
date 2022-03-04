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
  //VARIABLE FROM MOVIE: ID (TO USE FOR PRODUCT ID)
  productId: number = 0;

  //VARIABLE FROM MOVIE: FIND PRICE
  moviePrice: number = 0;

  //VARIABLE FOR CUSTOMER (createdBy:UserDetails[])
  createdBy: UserDetails[] = [];

  //VARIABLE FOR TOTAL PRICE (totalprice:number)

  //VARIABLE FOR ORDERROWS (orderRows:OrderRowsDetails[])

  orderRowsTest() {
    let orderRows = new OrderRowsDetails(this.productId, 0); //NOLLAN HÄR SKA VARA ANTAL AV VARAN!!
    console.log(orderRows); //HÄR BLIR PRODUKT-ID RÄTT MEN NUMBER() I KLASSEN GENERERAR INTE NÅGOT ID...
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

    this.orderRowsTest();
  }

  //TO EXTRACT PRODUCTID AND PRICE
  getInfoFromMovie() {
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
