import { TestBed, inject } from '@angular/core/testing';

import { FondSatiService } from './fond-sati.service';

describe('FondSatiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FondSatiService]
    });
  });

  it('should be created', inject([FondSatiService], (service: FondSatiService) => {
    expect(service).toBeTruthy();
  }));
});
