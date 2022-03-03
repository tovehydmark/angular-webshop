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

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  myOrderList: Movie[] = [];

  customerDetails = this.fb.group({
    fName: ['', Validators.required],
    lName: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
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
    // this.service.getMovies();
  }

  removeMovie(i: number) {
    this.myOrderList.splice(i, 1);
    console.log(this.myOrderList);
  }

  submitOrder() {
    console.log('ORDER PLACED');
  }
}
