import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
import { IProducts } from 'src/app/Interfaces.ts/IProducts';
import { Movie } from 'src/app/models/movie';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  //SENDS DATA TO PRODUCT COMPONENT
  @Input() movie: Movie = new Movie(0, '', '', 0, '', 0);

  //WITH EVENT EMITTER
  @Output() movieSelectedEventEmitter = new EventEmitter();

  movieOrder: Movie = new Movie(0, '', '', 0, '', 0);

  //TO COUNT FOR NUMBER OF MOVIES IN BASKET AND IF MULTIPLE MOVIES OF THE SAME
  moviesInBasket: number = 0;

  constructor(private service: OrderService) {}

  ngOnInit(): void {}

  //WITH EVENT EMITTER
  addMovie(selectedMovie: Movie) {
    this.movieSelectedEventEmitter.emit(selectedMovie);
  }

  //SEND TO SERVICE
  //ADD MOVIE TO BASKET
  // addMovie(choosenMovie: Movie) {
  //   let numberOfMovies = this.moviesInBasket++;

  //   this.movieOrder = choosenMovie;
  //   this.service.addMovieToOrder(choosenMovie);
  //   console.log(numberOfMovies);
  // }

  //REMOVE MOVIE FROM BASKET
  removeMovie(i: number) {
    this.service.removeMovieFromOrder(i);
    let numberOfMovies = this.moviesInBasket--;
  }
}
