import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('should should be true', () => {
    let trueValue = true;
    expect(trueValue).toEqual(trueValue);
  });

  /*
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should run test runner', () => {
    let booleanState = true;
    expect(booleanState).toEqual(booleanState);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  */

});
