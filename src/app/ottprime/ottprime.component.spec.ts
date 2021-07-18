import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttprimeComponent } from './ottprime.component';

describe('OttprimeComponent', () => {
  let component: OttprimeComponent;
  let fixture: ComponentFixture<OttprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttprimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
