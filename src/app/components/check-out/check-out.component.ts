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

  productId: number = 0; //ProductId works

  amount: number = 1;

  thanksForOrder: boolean = false;

  totalMoviePrice: number = 0;
  orderRowsList: OrderRowsDetails[] = [];

  userDetails: UserDetails = {
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
    country: '',
  });

  testForOrderData() {
    const customerDetailsFromForm = this.customerDetails.value;

    this.userDetails = new UserDetails(
      customerDetailsFromForm.fName,
      customerDetailsFromForm.lName,
      customerDetailsFromForm.email,
      customerDetailsFromForm.streetAddress,
      customerDetailsFromForm.city,
      customerDetailsFromForm.postcode,
      customerDetailsFromForm.country
    );
  }

  orderToSend: OrderToSend = new OrderToSend('', 0, this.orderRowsList);

  constructor(private service: OrderService, private fb: FormBuilder) {}

  ngOnInit(): void {
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);
  }

  getInfoFromMovie() {
    for (let i = 0; i < this.orderList.length; i++) {
      this.productId = this.orderList[i].id;

      let orderRows = new OrderRowsDetails(this.productId, this.amount);
      this.orderRowsList.push(orderRows);

      this.totalMoviePrice = this.totalMoviePrice + this.orderList[i].price;
    }
  }

  thanksForYourOrder() {
    this.thanksForOrder = true;
  }

  onSubmit() {
    this.testForOrderData();
    this.getInfoFromMovie();
    this.thanksForYourOrder();

    this.orderToSend = new OrderToSend(
      'Name: ' +
        this.userDetails.fName +
        ', Surname: ' +
        this.userDetails.lName +
        ', Email: ' +
        this.userDetails.email +
        ', Address: ' +
        this.userDetails.streetAddress +
        ', ' +
        this.userDetails.city +
        ', ' +
        this.userDetails.postcode +
        ', ' +
        this.userDetails.country,
      this.totalMoviePrice,
      this.orderRowsList
    );
    this.service.confirmOrder(this.orderToSend);

    //Clear order list and customer form
    this.orderList = [];
    localStorage.setItem('orderList', JSON.stringify(this.orderList));

    this.customerDetails.reset();
  }
}
