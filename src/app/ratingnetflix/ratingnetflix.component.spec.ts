import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingnetflixComponent } from './ratingnetflix.component';

describe('RatingnetflixComponent', () => {
  let component: RatingnetflixComponent;
  let fixture: ComponentFixture<RatingnetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingnetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingnetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
