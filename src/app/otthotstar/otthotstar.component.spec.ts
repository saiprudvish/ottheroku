import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtthotstarComponent } from './otthotstar.component';

describe('OtthotstarComponent', () => {
  let component: OtthotstarComponent;
  let fixture: ComponentFixture<OtthotstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtthotstarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtthotstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
