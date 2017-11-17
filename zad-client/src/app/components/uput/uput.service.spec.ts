import { TestBed, inject } from '@angular/core/testing';

import { UputService } from './uput.service';

describe('UputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UputService]
    });
  });

  it('should be created', inject([UputService], (service: UputService) => {
    expect(service).toBeTruthy();
  }));
});
