import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
import { IProducts } from 'src/app/Interfaces.ts/IProducts';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  movies: IProducts[] = [];
  productId: number = 0;

  moviesAddedByUser: IProducts[] = [];

  constructor(private service: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.movies$.subscribe((dataFromService: IProducts[]) => {
      this.movies = dataFromService;
      console.log(dataFromService);
    });
    this.service.getMovies();
  }

  selectedMovieToSell(data: IProducts) {
    //Datan vi får från API:et
    this.moviesAddedByUser.push(data);
    console.log(this.moviesAddedByUser);
  }

  selectedMovieToRemove(data: IProducts) {
    let itemToRemove = delete this.moviesAddedByUser[data.id];
    console.log(itemToRemove);

    console.log(this.moviesAddedByUser);
  }
}

// //URL ÄNDRAS OM JAG ÄNDRAR I URL, INTE AV SIG SJÄLV. FIXA
// this.route.params.subscribe((p) => {
//   console.log(p['id']);

//   this.productId = +p['id'];
// });
