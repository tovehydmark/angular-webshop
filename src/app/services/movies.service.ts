import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { ICategories } from '../Interfaces.ts/ICategories';
import { IProducts } from '../Interfaces.ts/IProducts';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies = new Subject<IProducts[]>();
  movies$ = this.movies.asObservable();

  private myOrderList: Movie[] = [];
  myOrderList$: Observable<Movie[]> = of(this.myOrderList);

  private categoriesList = new Subject<ICategories[]>();
  categoriesList$ = this.categoriesList.asObservable();

  constructor(private http: HttpClient) {}

  getMovies(): void {
    this.http
      .get<IProducts[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
      )
      .subscribe((response: IProducts[]) => {
        this.movies.next(response);
      });
  }

  addMovieFromUser(movie: Movie) {
    this.myOrderList.push(movie);
  }

  removeMovieFromUser(i: number) {
    this.myOrderList.splice(i, 1);
  }

  getCategories(): void {
    this.http
      .get<ICategories[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/categories'
      )
      .subscribe((response: ICategories[]) => {
        this.categoriesList.next(response);
      });
  }

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
