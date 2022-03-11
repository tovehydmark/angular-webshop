import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProducts } from '../Interfaces.ts/IProducts';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MockMovieService {
  private movies = new Subject<IProducts[]>();
  public movies$: Observable<Movie[]> = this.movies.asObservable();

  movieTestData: Movie[] = [
    new Movie(1, 'testOne', 'firstTest', 1, 'url', 2008),
    new Movie(2, 'testTwo', 'secondTest', 2, 'url', 2008),
    new Movie(3, 'testThree', 'thirdTest', 3, 'url', 2008),
    new Movie(4, 'testFour', 'fourthTest', 4, 'url', 2008),
  ];
  constructor() {}

  getMovies() {
    this.movies.next(this.movieTestData);
  }
}
