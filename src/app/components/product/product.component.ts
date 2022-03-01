import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
import { IProducts } from 'src/app/Interfaces.ts/IProducts';
import { Movie } from 'src/app/models/movie';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  //SENDS DATA TO PRODUCT COMPONENT
  @Input() movie: Movie = new Movie(0, '', '', 0, '', 0);

  movieOrder: Movie = new Movie(0, '', '', 0, '', 0);

  constructor(private service: OrderService) {}

  ngOnInit(): void {}

  //SEND TO SERVICE
  addMovie(newMovie: Movie) {
    this.movieOrder = newMovie;
    this.service.addMovie(newMovie);

    console.log(this.movieOrder);
  }
}
