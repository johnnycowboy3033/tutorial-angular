import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowArraysComponent } from './show-arrays.component';

describe('ShowArraysComponent', () => {
  let component: ShowArraysComponent;
  let fixture: ComponentFixture<ShowArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowArraysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
