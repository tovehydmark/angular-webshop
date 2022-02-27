import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces.ts/IProduct';
import { IProducts } from 'src/app/Interfaces.ts/IProducts';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() movie: Movie = new Movie(0, '', '', 0, '', 0);

  constructor() {}

  ngOnInit(): void {}
}
