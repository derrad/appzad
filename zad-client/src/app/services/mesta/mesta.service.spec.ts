import { TestBed, inject } from '@angular/core/testing';

import { MestaService } from './mesta.service';

describe('MestaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MestaService]
    });
  });

  it('should be created', inject([MestaService], (service: MestaService) => {
    expect(service).toBeTruthy();
  }));
});
