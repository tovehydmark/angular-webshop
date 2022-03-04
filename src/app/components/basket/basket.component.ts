import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  myOrderList: Movie[] = [];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.myOrderList$.subscribe((movieData: Movie[]) => {
      this.myOrderList = movieData;
    });
  }

  //TO ENABLE TO REMOVE MOVIES FROM BASKET
  removeMovie(i: number) {
    this.myOrderList.splice(i, 1);
    console.log(this.myOrderList);
  }
}
