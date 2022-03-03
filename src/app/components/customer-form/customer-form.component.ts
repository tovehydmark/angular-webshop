import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  //Skicka upp updated orderform to service??
  private orderForm: UserDetails = new UserDetails('', '', '', '', '', '', '');

  orderForm$: Observable<UserDetails> = of(this.orderForm);

  //Variabel för total price

  // orderForm: IUserDetails = {
  //   fName: '',
  //   lName: '',
  //   email: '',
  //   streetAddress: '',
  //   city: '',
  //   postcode: '',
  //   country: '',
  // };

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

  ngOnInit(): void {}

  onSubmit() {
    this.orderForm = this.customerDetails.value;
    console.log(this.orderForm);
  }
}
