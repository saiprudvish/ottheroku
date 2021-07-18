import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratingComponent } from './toprating.component';

describe('TopratingComponent', () => {
  let component: TopratingComponent;
  let fixture: ComponentFixture<TopratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
