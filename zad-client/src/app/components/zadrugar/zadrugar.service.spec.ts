import { TestBed, inject } from '@angular/core/testing';

import { ZadrugarService } from './zadrugar.service';

describe('ZadrugarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZadrugarService]
    });
  });

  it('should be created', inject([ZadrugarService], (service: ZadrugarService) => {
    expect(service).toBeTruthy();
  }));
});
