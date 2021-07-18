import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingprimeComponent } from './ratingprime.component';

describe('RatingprimeComponent', () => {
  let component: RatingprimeComponent;
  let fixture: ComponentFixture<RatingprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingprimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
