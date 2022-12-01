import { TestBed } from '@angular/core/testing';

import { ShowArraysService } from './show-arrays.service';

describe('ShowArraysService', () => {
  let service: ShowArraysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowArraysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
