import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';

export interface IMovieService {
  movies$: Observable<Movie[]>;

  getMovies(): void;
}
