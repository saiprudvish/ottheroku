import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttshowsComponent } from './ottshows.component';

describe('OttshowsComponent', () => {
  let component: OttshowsComponent;
  let fixture: ComponentFixture<OttshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
