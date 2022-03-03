import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IUserDetails } from 'src/app/Interfaces.ts/IUserDetails';
import { Observable, of, Subject } from 'rxjs';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  myOrderList: Movie[] = [];

  // orderForm: IUserDetails = {
  //   fName: '',
  //   lName: '',
  //   email: '',
  //   streetAddress: '',
  //   city: '',
  //   postcode: '',
  //   country: '',
  // };

  //Skicka upp updated orderform to service??
  private orderForm: UserDetails = new UserDetails('', '', '', '', '', '', '');

  orderForm$: Observable<UserDetails> = of(this.orderForm);

  //Variabel för total price

  customerDetails = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    email: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
  });

  constructor(private service: MoviesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.service.myOrderList$.subscribe((movieData: Movie[]) => {
      this.myOrderList = movieData;
    });
  }

  //TO ENABLE TO REMOVE MOVIES FROM BASKET
  // removeMovie(i: number) {
  //   this.myOrderList.splice(i, 1);
  //   console.log(this.myOrderList);
  // }
  removeMovie(i: number) {}

  onSubmit() {
    this.orderForm = this.customerDetails.value;
    console.log(this.orderForm);
  }
}
