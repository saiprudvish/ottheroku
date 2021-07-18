import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtttopmoviesComponent } from './otttopmovies.component';

describe('OtttopmoviesComponent', () => {
  let component: OtttopmoviesComponent;
  let fixture: ComponentFixture<OtttopmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtttopmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtttopmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
