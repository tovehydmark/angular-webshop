import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';
import { MockMovieService } from 'src/app/services/mock-movie.service';
import { MoviesService } from 'src/app/services/movies.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [HttpClientModule],

      providers: [{ provide: MoviesService, useClass: MockMovieService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should view data from movieList', () => {
    component.ngOnInit();
    expect(component.movieList[0].year).toBe(2008);
  });
});
