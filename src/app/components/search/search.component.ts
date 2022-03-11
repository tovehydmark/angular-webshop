import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { IProducts } from 'src/app/Interfaces.ts/IProducts';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  orderList: Movie[] = [];
  displayMovieInfo: boolean = false;

  searchForMovie: Observable<IProducts[]> = new Observable();
  searchTerm = new Subject<string>();

  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {
    //FETCHES SEARCH API VIA MOVIE-SERVICES
    this.searchForMovie = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTermFromUser) => {
        return this.MoviesService.getSearchApi(searchTermFromUser);
      })
    );
    this.searchForMovie.subscribe(() => {});

    //LOCAL STORAGE
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);
  }

  //SHOWS/HIDES INFORMATION ABOUT MOVIES
  toggleMovieInfo() {
    this.displayMovieInfo = !this.displayMovieInfo;
  }

  //ENABLES CUSTOMER TO ADD MOVIE ON THE SEARCH PAGE
  addMovie(movie: Movie) {
    this.orderList.push(movie);
    localStorage.setItem('orderList', JSON.stringify(this.orderList));
    this.saveToLS();
  }

  // LOCAL STORAGE
  saveToLS() {
    localStorage.setItem('orderList', JSON.stringify(this.orderList));
  }

  search(searchTermFromUser: string) {
    this.searchTerm.next(searchTermFromUser);
  }
}
