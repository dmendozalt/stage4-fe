import { TestBed } from '@angular/core/testing';

import { ResidentialInfoGuard } from './residential-info.guard';

describe('ResidentialInfoGuard', () => {
  let guard: ResidentialInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResidentialInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
