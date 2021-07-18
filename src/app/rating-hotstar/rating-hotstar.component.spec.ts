import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingHotstarComponent } from './rating-hotstar.component';

describe('RatingHotstarComponent', () => {
  let component: RatingHotstarComponent;
  let fixture: ComponentFixture<RatingHotstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingHotstarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingHotstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
