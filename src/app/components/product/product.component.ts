import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/Interfaces.ts/ICategories';
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
  changeButtonText: string = 'View';

  displayAllMovies: boolean = false;
  displayCategories: boolean = false;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.displayAllMovies = true;

    //FETCHING MOVIE AND CATEGORIES API VIA SERVICES
    this.service.movies$.subscribe((movieData: Movie[]) => {
      this.movieList = movieData;
    });
    this.service.getMovies();

    this.service.categoriesList$.subscribe((categoriesData: ICategories[]) => {
      this.categoriesList = categoriesData;
    });
    this.service.getCategories();

    //LOCAL STORAGE
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.orderList = JSON.parse(orderList);
  }

  toggleMovieInfo() {
    this.displayMovieInfo = !this.displayMovieInfo;

    if (this.displayMovieInfo == true) {
      this.changeButtonText = 'Hide';
    } else if (this.displayMovieInfo == false) {
      this.changeButtonText = 'View';
    }
  }

  addMovie(movie: Movie) {
    this.orderList.push(movie);
    localStorage.setItem('orderList', JSON.stringify(this.orderList));
    this.saveToLS();
  }

  //LOCAL STORAGE
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
}
