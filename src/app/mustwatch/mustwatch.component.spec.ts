import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustwatchComponent } from './mustwatch.component';

describe('MustwatchComponent', () => {
  let component: MustwatchComponent;
  let fixture: ComponentFixture<MustwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MustwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
