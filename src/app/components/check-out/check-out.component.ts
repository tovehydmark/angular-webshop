import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  // createdBy: UserDetails[] = [];

  firstName: string = 'tove';
  lastName: string = 'hydmark';
  email: string = 'tovehydmark@gmail.com';
  streetAddress: string = '49 dryburgh';
  city: string = 'London';
  postcode: string = 'SW151BN';
  country: string = 'UK';

  // createdByTest: UserDetails = new UserDetails(
  //   this.firstName,
  //   this.lastName,
  //   this.email,
  //   this.streetAddress,
  //   this.city,
  //   this.postcode,
  //   this.country
  // );
  createdByTest: string = 'Tove';

  //VARIABLE FOR TOTAL PRICE (totalprice:number)
  totalMoviePrice: number = 0;

  //VARIABLE FOR ORDERROWS (orderRows:OrderRowsDetails[])
  // orderRows = new OrderRowsDetails(this.productId, this.amount);
  orderRowsList: OrderRowsDetails[] = [];

  orderToSend: OrderToSend = new OrderToSend(
    this.createdByTest,
    this.totalMoviePrice,
    this.orderRowsList
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);

    this.getInfoFromMovie();
  }

  getUserDetails() {
    let createdBy: string = localStorage.getItem('userDetails') || '[]';
    this.createdByTest = JSON.parse(createdBy);
    console.log(createdBy);
  }

  //TO EXTRACT PRODUCTID AND PRICE
  getInfoFromMovie() {
    for (let i = 0; i < this.orderList.length; i++) {
      this.productId = this.orderList[i].id;

      let orderRows = new OrderRowsDetails(this.productId, this.amount);
      this.orderRowsList.push(orderRows);

      this.totalMoviePrice = this.totalMoviePrice + this.orderList[i].price;
    }
  }

  sendOrder(orderToSend: OrderToSend) {
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

  confirmOrder() {
    this.getUserDetails();
    // this.getOrderRows();
    this.sendOrder(this.orderToSend);

    console.log('Innan post: ' + JSON.stringify(this.orderToSend));
  }
}
