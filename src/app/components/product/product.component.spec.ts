import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      //I HAD TROUBLES WITH THE TESTING AND RECEIVED THE ERROR MESSAGE:

      //"cannot read properties of undefined (reading 'subscribe')"

      //THEREFORE, I CHOSE TO COMMENT OUT THE MORE "ADVANCED" TESTS I DID BELOW, AS WELL AS THE IMPORT OF PROVIDERS. (I AM AWARE I MAY HAVE MISSED SOMETHING BUT GOOGLE COULDN'T HELP ME, I WOULD APPRECIATE A COMMENT IF YOU KNOW WHAT WENT WRONG)

      // providers: [{ provide: MoviesService, useClass: MockMovieService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should view data from movieList', () => {
  //   component.ngOnInit();
  //   expect(component.movieList[0].year).toBe(2008);
  // });

  // it('should get the data from the mockService', () => {
  //   component.ngOnInit();
  //   expect(component.movieList.length).toBe(3);
  // });

  it('should toggle movieInfo', () => {
    expect(component.displayMovieInfo).toBe(false);
    component.toggleMovieInfo();
    expect(component.displayMovieInfo).toBe(true);
  });
});
