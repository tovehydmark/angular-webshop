import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { ICategories } from '../Interfaces.ts/ICategories';
import { IMovieService } from '../Interfaces.ts/IMovieService';
import { IProducts } from '../Interfaces.ts/IProducts';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService implements IMovieService {
  private movies = new Subject<IProducts[]>();
  public movies$: Observable<Movie[]> = this.movies.asObservable();

  private myOrderList: Movie[] = [];
  myOrderList$: Observable<Movie[]> = of(this.myOrderList);

  private categoriesList = new Subject<ICategories[]>();
  categoriesList$ = this.categoriesList.asObservable();

  constructor(private http: HttpClient) {}

  //FETCHES DATA FROM THE MOVIE API
  getMovies(): void {
    this.http
      .get<IProducts[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
      )
      .subscribe((response: IProducts[]) => {
        this.movies.next(response);
      });
  }

  //LETS USER ADD ORDERS TO THE BASKET
  addMovieFromUser(movie: Movie) {
    this.myOrderList.push(movie);
  }

  //LLETS USER REMOVE ORDERS FROM THE BASKET
  removeMovieFromUser(i: number) {
    this.myOrderList.splice(i, 1);
  }

  //FETCHES DATA FROM THE CATEGORIES API
  getCategories(): void {
    this.http
      .get<ICategories[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/categories'
      )
      .subscribe((response: ICategories[]) => {
        this.categoriesList.next(response);
      });
  }

  //FETCHES DATA FROM THE SEARCH API
  getSearchApi(searchTerm: string): Observable<IProducts[]> {
    return this.http
      .get<IProducts[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/search' +
          '?=' +
          searchTerm
      )
      .pipe(map((data: IProducts[]) => data));
  }
}
