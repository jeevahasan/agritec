import { TestBed } from '@angular/core/testing';

import { BaiService } from './bai.service';

describe('BaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaiService = TestBed.get(BaiService);
    expect(service).toBeTruthy();
  });
});
