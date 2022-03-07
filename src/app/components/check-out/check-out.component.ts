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

  productId: number = 0;

  amount: number = 1;

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
  createdByTest: string = '';
  totalMoviePrice: number = 0;
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
  }

  getUserDetails() {
    let createdBy: string = localStorage.getItem('userDetails') || '[]';
    this.createdByTest = createdBy;
  }

  //TO GET PRODUCTID AND PRICE
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
    this.getInfoFromMovie();

    this.sendOrder(this.orderToSend);
  }
}
