import { TestBed, inject } from '@angular/core/testing';

import { DrzaveServiceService } from './drzave-service.service';

describe('DrzaveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrzaveServiceService]
    });
  });

  it('should be created', inject([DrzaveServiceService], (service: DrzaveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
