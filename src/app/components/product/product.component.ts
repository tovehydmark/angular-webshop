import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
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

  newMovie: Movie = new Movie(0, '', '', 0, '', 0);

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.movies$.subscribe((movieData: Movie[]) => {
      this.movieList = movieData;
      console.log(movieData);
    });
    this.service.getMovies();
  }

  //SEND TO SERVICE
  //ADD MOVIE TO BASKET
  addMovie(movie: Movie) {
    this.service.addMovieFromUser(movie);
  }

  //REMOVE MOVIE FROM BASKET
  removeMovie(i: number) {
    this.service.removeMovieFromUser(i);
    //  let numberOfMovies = this.moviesInBasket--;
  }
}
