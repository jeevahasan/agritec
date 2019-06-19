import { TestBed } from '@angular/core/testing';

import { FarmerpageService } from './farmerpage.service';

describe('FarmerpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerpageService = TestBed.get(FarmerpageService);
    expect(service).toBeTruthy();
  });
});
