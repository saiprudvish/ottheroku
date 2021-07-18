import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotstarComponent } from './hotstar.component';

describe('HotstarComponent', () => {
  let component: HotstarComponent;
  let fixture: ComponentFixture<HotstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotstarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
