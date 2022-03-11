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
  productId: number = 0;
  amount: number = 1;
  thanksForOrder: boolean = false;
  totalMoviePrice: number = 0;
  orderRowsList: OrderRowsDetails[] = [];

  completeOrderToSend: OrderToSend = new OrderToSend('', 0, this.orderRowsList);

  userDetails: UserDetails = {
    fName: '',
    lName: '',
    email: '',
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
  };

  //CREATING USER FORM FOR CUSTOMER DETAILS

  customerDetails = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    email: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: '',
  });

  userDataFromOrderForm() {
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

  constructor(private service: OrderService, private fb: FormBuilder) {}

  ngOnInit(): void {
    //LOCAL STORAGE

    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);
  }

  //SUBTRACTING INFORMATION FROM MOVIES FOR USE IN HTML FILE

  getInfoFromMovie() {
    for (let i = 0; i < this.orderList.length; i++) {
      this.productId = this.orderList[i].id;

      let orderRows = new OrderRowsDetails(this.productId, this.amount);

      this.orderRowsList.push(orderRows);

      this.totalMoviePrice = this.totalMoviePrice + this.orderList[i].price;
    }
  }

  //FUNCTION TO DISPLAY THANK YOU MESSAGE AFTER PURCHASE

  thanksForYourOrder() {
    this.thanksForOrder = true;
  }

  //FUNCTIONS TO BE RUN WHEN USER PRESS SUBMIT BUTTON IN FORM

  onSubmit() {
    this.userDataFromOrderForm();
    this.getInfoFromMovie();
    this.thanksForYourOrder();

    this.completeOrderToSend = new OrderToSend(
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
    this.service.confirmOrder(this.completeOrderToSend);

    //CLEARS USER FORM AND ORDER LIST IN LOCAL STORAGE

    this.orderList = [];

    localStorage.setItem('orderList', JSON.stringify(this.orderList));

    this.customerDetails.reset();
  }
}
