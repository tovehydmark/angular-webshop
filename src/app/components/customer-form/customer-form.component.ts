import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  orderForm: UserDetails[] = [];

  customerDetails = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    email: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    let userDetails: string = localStorage.getItem('userDetails') || '[]';
    this.orderForm = JSON.parse(userDetails);
  }

  onSubmit() {
    this.orderForm = this.customerDetails.value;
    localStorage.setItem('userDetails', JSON.stringify(this.orderForm));
  }
}
