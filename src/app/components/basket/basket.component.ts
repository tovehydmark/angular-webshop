import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { IUserDetails } from 'src/app/Interfaces.ts/IUserDetails';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  myOrderList: Movie[] = [];

  orderForm: IUserDetails[] = [];

  customerDetails = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      postcode: ['', Validators.required],
      country: ['', Validators.required],
    }),
  });

  constructor(private service: MoviesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.service.myOrderList$.subscribe((movieData: Movie[]) => {
      this.myOrderList = movieData;
    });
  }

  removeMovie(i: number) {
    this.myOrderList.splice(i, 1);
    console.log(this.myOrderList);
  }

  onSubmit() {
    console.log('ORDER PLACED');
    console.log(this.customerDetails.value);
  }
}
