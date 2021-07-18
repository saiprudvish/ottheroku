import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttahaComponent } from './ottaha.component';

describe('OttahaComponent', () => {
  let component: OttahaComponent;
  let fixture: ComponentFixture<OttahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttahaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
