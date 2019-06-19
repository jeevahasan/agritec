import { TestBed } from '@angular/core/testing';

import { AgroservicesService } from './agroservices.service';

describe('AgroservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgroservicesService = TestBed.get(AgroservicesService);
    expect(service).toBeTruthy();
  });
});
