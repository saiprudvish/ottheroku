import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsratingComponent } from './showsrating.component';

describe('ShowsratingComponent', () => {
  let component: ShowsratingComponent;
  let fixture: ComponentFixture<ShowsratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
