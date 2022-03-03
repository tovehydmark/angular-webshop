import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  myOrderList: Movie[] = [];

  customerDetails = this.fb.group({
    fName: [''],
    lName: [''],
    email: [''],
    address: this.fb.group({
      streetAddress: [''],
      city: [''],
      postcode: [''],
      country: [''],
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
