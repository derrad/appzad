import { TestBed, inject } from '@angular/core/testing';

import { ZanimanjaService } from './zanimanja.service';

describe('ZanimanjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZanimanjaService]
    });
  });

  it('should be created', inject([ZanimanjaService], (service: ZanimanjaService) => {
    expect(service).toBeTruthy();
  }));
});
