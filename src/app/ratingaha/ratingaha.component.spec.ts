import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingahaComponent } from './ratingaha.component';

describe('RatingahaComponent', () => {
  let component: RatingahaComponent;
  let fixture: ComponentFixture<RatingahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingahaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
