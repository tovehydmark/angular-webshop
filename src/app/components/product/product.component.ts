import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IProducts } from 'src/app/Interfaces.ts/IProducts';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  movieList: Movie[] = [];

  orderList: Movie[] = [];

  //newMovie: Movie = new Movie(0, '', '', 0, '', 0);

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    //SUBSCRIBES TO THE MOVIE DATA FROM API
    this.service.movies$.subscribe((movieData: Movie[]) => {
      this.movieList = movieData;
    });
    //FETCHES THE MOVIES VIA SERVICE
    this.service.getMovies();

    //LOCAL STORAGE
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);
  }

  addMovie(movie: Movie) {
    this.orderList.push(movie);
    localStorage.setItem('orderList', JSON.stringify(this.orderList));
    this.saveToLS();
    //this.service.addMovieFromUser(movie);
  }

  removeMovie(i: number) {
    this.orderList.splice(i);
    this.saveToLS();
    //  this.service.removeMovieFromUser(i);
  }

  saveToLS() {
    localStorage.setItem('orderList', JSON.stringify(this.orderList));
  }
}
