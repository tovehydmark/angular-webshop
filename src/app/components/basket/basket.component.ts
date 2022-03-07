import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  //myOrderList: Movie[] = [];

  myOrderList: Movie[] = [];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    let orderList: string = localStorage.getItem('orderList') || '[]';
    this.myOrderList = JSON.parse(orderList);
    // console.log(orderList);

    //SET ORDERROWS TO LS
  }

  //TO ENABLE TO REMOVE MOVIES FROM BASKET
  removeMovie(i: number) {
    this.myOrderList.splice(i, 1);
    localStorage.setItem('orderList', JSON.stringify(this.myOrderList));
  }
}
