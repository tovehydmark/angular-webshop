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

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.movies$.subscribe((movieData: Movie[]) => {
      this.movieList = movieData;
    });
    this.service.getMovies();

    this.service.categoriesList$.subscribe((categoriesData: ICategories[]) => {
      this.categoriesList = categoriesData;
      console.log(categoriesData);
    });
    this.service.getCategories();

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
}
