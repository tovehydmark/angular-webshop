import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { OrderRowsDetails } from 'src/app/models/OrderRowsDetails';
import { OrderToSend } from 'src/app/models/OrderToSend';
import { UserDetails } from 'src/app/models/UserDetails';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  orderList: Movie[] = [];
  orderForm: UserDetails[] = [];

  productId: number = 0;
  amount: number = 1;

  createdByTest: string = '';
  totalMoviePrice: number = 0;
  orderRowsList: OrderRowsDetails[] = [];

  customerDetailsTest: UserDetails = {
    fName: '',
    lName: '',
    email: '',
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
  };

  customerDetails = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    email: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
  });

  testForOrderData() {
    const customerDetailsFromForm = this.customerDetails.value;

    this.customerDetailsTest = new UserDetails(
      customerDetailsFromForm.fName,
      customerDetailsFromForm.lName,
      customerDetailsFromForm.email,
      customerDetailsFromForm.streetAddress,
      customerDetailsFromForm.city,
      customerDetailsFromForm.postcode,
      customerDetailsFromForm.country
    );
  }

  orderToSend: OrderToSend = new OrderToSend(
    '',
    0,
    this.orderRowsList
    // this.customerDetails.value.fName,
    // // this.createdByTest, //om jag consolloggar denna får den rätt värde men det skickas en tom sträng
    // this.totalMoviePrice, //samma med denna
    // this.orderRowsList
  );

  constructor(
    private http: HttpClient,
    private service: OrderService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);

    // let userDetails: string = localStorage.getItem('userDetails') || '[]';
    // this.orderForm = JSON.parse(userDetails);
  }

  getUserDetails() {
    let createdBy: string = localStorage.getItem('userDetails') || '[]';
    this.createdByTest = createdBy; //Här hämtar jag user details och det blir rätt
  }

  getInfoFromMovie() {
    for (let i = 0; i < this.orderList.length; i++) {
      this.productId = this.orderList[i].id;

      let orderRows = new OrderRowsDetails(this.productId, this.amount);
      this.orderRowsList.push(orderRows);

      this.totalMoviePrice = this.totalMoviePrice + this.orderList[i].price;
    }
  }

  sendOrder(orderToSend: OrderToSend) {
    this.service.confirmOrder(orderToSend);
  }

  confirmOrder() {
    this.getUserDetails();
    this.getInfoFromMovie();
    this.sendOrder(this.orderToSend);
  }

  onSubmit() {
    this.testForOrderData();
    this.getInfoFromMovie();

    this.orderToSend = new OrderToSend(
      this.customerDetailsTest.fName,
      this.totalMoviePrice,
      this.orderRowsList
    );
  }

  //   this.orderForm = this.customerDetails.value;
  //   localStorage.setItem('userDetails', JSON.stringify(this.orderForm));
  // }
}

// createdByTest: UserDetails = new UserDetails(
//   this.firstName,
//   this.lastName,
//   this.email,
//   this.streetAddress,
//   this.city,
//   this.postcode,
//   this.country
// );

// firstName: string = 'tove';
// lastName: string = 'hydmark';
// email: string = 'tovehydmark@gmail.com';
// streetAddress: string = '49 dryburgh';
// city: string = 'London';
// postcode: string = 'SW151BN';
// country: string = 'UK';
