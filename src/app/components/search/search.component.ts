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

  //FOR MOVIE SEARCH
  searchForMovie: Observable<IProducts[]> = new Observable();
  searchTerm = new Subject<string>();
  constructor(private MoviesService: MoviesService) {}

  ngOnInit(): void {
    //SEARCH
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

  search(searchTermFromUser: string) {
    this.searchTerm.next(searchTermFromUser);
    if (searchTermFromUser.length < 1) {
      console.log('mindre än 1');
    }
  }
}
