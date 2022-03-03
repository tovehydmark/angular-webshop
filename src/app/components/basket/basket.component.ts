import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { FormBuilder, Validators } from '@angular/forms';
// import { IUserDetails } from 'src/app/Interfaces.ts/IUserDetails';
import { Observable, of, Subject } from 'rxjs';
import { UserDetails } from 'src/app/models/UserDetails';

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
