import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
import { IProducts } from 'src/app/Interfaces.ts/IProducts';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  movies: IProducts[] = [];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.movies$.subscribe((dataFromService: IProducts[]) => {
      this.movies = dataFromService;
      console.log(dataFromService);
    });
    this.service.getMovies();
  }
}
