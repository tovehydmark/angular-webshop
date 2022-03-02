import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
import { IProducts } from 'src/app/Interfaces.ts/IProducts';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //   movies: IProducts[] = [];

  //   constructor(private service: MoviesService, private route: ActivatedRoute) {}

  //   ngOnInit(): void {
  //     this.service.movies$.subscribe((dataFromService: IProducts[]) => {
  //       this.movies = dataFromService;
  //       console.log(dataFromService);
  //     });
  //     this.service.getMovies();
  //   }

  //   addMovie(movie: Movie) {
  //     this.service.addMovieFromUser(movie);
  //   }

  //   removeMovie(i: number) {
  //     this.service.removeMovieFromUser(i);
  //   }
  // }

  // //URL ÄNDRAS OM JAG ÄNDRAR I URL, INTE AV SIG SJÄLV. FIXA
  // this.route.params.subscribe((p) => {
  //   console.log(p['id']);

  //   this.productId = +p['id'];
  // });
}
