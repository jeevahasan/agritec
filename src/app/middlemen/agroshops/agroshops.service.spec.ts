import { TestBed } from '@angular/core/testing';

import { AgroshopsService } from './agroshops.service';

describe('AgroshopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgroshopsService = TestBed.get(AgroshopsService);
    expect(service).toBeTruthy();
  });
});
