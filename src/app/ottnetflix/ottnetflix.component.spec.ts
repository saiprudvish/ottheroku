import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttnetflixComponent } from './ottnetflix.component';

describe('OttnetflixComponent', () => {
  let component: OttnetflixComponent;
  let fixture: ComponentFixture<OttnetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttnetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttnetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
