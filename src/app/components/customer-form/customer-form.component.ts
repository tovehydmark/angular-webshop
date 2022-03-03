import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { OrderRowsDetails } from 'src/app/models/OrderRowsDetails';
import { OrderToSend } from 'src/app/models/OrderToSend';
import { UserDetails } from 'src/app/models/UserDetails';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  //Skicka upp updated orderform to service??
  // private orderForm: UserDetails = new UserDetails('', '', '', '', '', '', '');

  orderForm: UserDetails[] = [];

  // orderForm$: Observable<UserDetails> = of(this.orderForm);

  orderRow: OrderRowsDetails[] = [];

  customerDetails = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    email: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
  });

  constructor(private service: OrderService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.orderForm = this.customerDetails.value;
    // console.log(this.orderForm);

    const totalPrice = 100;
    const createdBy = this.orderForm;
    const orderRow = this.orderRow;

    const readyOrder: OrderToSend = new OrderToSend(
      createdBy,
      totalPrice,
      orderRow
    );

    //readyOrder here seem to be the right kind of object??
    console.log(JSON.stringify(readyOrder));
  }
}
