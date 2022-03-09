import { Component, OnInit } from '@angular/core';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { ICategories } from 'src/app/Interfaces.ts/ICategories';
import { IProducts } from 'src/app/Interfaces.ts/IProducts';

import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  movieList: Movie[] = [];

  orderList: Movie[] = [];

  categoriesList: ICategories[] = [];

  movieIdList: Movie[] = [];

  displayMovieInfo: boolean = false;

  displayAllMovies: boolean = false;
  displayCategories: boolean = false;

  clearSearchTerm: boolean = false;

  // //FOR MOVIE SEARCH
  // searchForMovie: Observable<IProducts[]> = new Observable();
  // searchTerm = new Subject<string>();

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.displayAllMovies = true;

    //FETCHING MOVIE API, CATEGORIES API AND SEARCH API VIA SERVICES
    //MOVIES
    this.service.movies$.subscribe((movieData: Movie[]) => {
      this.movieList = movieData;
    });
    this.service.getMovies();

    // CATEGORIES
    this.service.categoriesList$.subscribe((categoriesData: ICategories[]) => {
      this.categoriesList = categoriesData;
    });
    this.service.getCategories();

    // //SEARCH
    // this.searchForMovie = this.searchTerm.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((searchTermFromUser) => {
    //     return this.service.getSearchApi(searchTermFromUser);
    //   })
    // );
    // this.searchForMovie.subscribe(() => {});

    //LOCAL STORAGE
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);
  }

  addMovie(movie: Movie) {
    this.orderList.push(movie);
    localStorage.setItem('orderList', JSON.stringify(this.orderList));
    this.saveToLS();
  }

  removeMovie(i: number) {
    this.orderList.splice(i, 1);
    this.saveToLS();
  }

  saveToLS() {
    localStorage.setItem('orderList', JSON.stringify(this.orderList));
  }

  showCategory(chosenCategoryId: number) {
    this.movieIdList = [];

    this.movieList.forEach((m) => {
      for (let i = 0; i < m.productCategory.length; i++) {
        if (m.productCategory[i].categoryId === chosenCategoryId) {
          this.movieIdList.push(m);
        }
      }
    });
  }

  // search(searchTermFromUser: string) {
  //   this.searchTerm.next(searchTermFromUser);
  //   if (searchTermFromUser.length < 1) {
  //     console.log('mindre än 1');
  //   }
  // }
}
