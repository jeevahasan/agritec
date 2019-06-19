import { TestBed } from '@angular/core/testing';

import { InformationcenterService } from './informationcenter.service';

describe('InformationcenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationcenterService = TestBed.get(InformationcenterService);
    expect(service).toBeTruthy();
  });
});
