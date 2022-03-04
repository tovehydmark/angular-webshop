import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IProducts } from '../Interfaces.ts/IProducts';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies = new Subject<IProducts[]>();
  movies$ = this.movies.asObservable();

  //OrderRows?? OrderrowsDetails??
  private myOrderList: Movie[] = [];
  myOrderList$: Observable<Movie[]> = of(this.myOrderList);

  //CustomerForm

  constructor(private http: HttpClient) {}

  getMovies(): void {
    this.http
      .get<IProducts[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
      )
      .subscribe((response: IProducts[]) => {
        this.movies.next(response);
        console.log(response);
      });
  }

  addMovieFromUser(movie: Movie) {
    this.myOrderList.push(movie);
    console.log(this.myOrderList);
  }

  removeMovieFromUser(i: number) {
    this.myOrderList.splice(i, 1);
    console.log(this.myOrderList);
  }
}
