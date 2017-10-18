import { TestBed, inject } from '@angular/core/testing';

import { PosaoService } from './posao.service';

describe('PosaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosaoService]
    });
  });

  it('should be created', inject([PosaoService], (service: PosaoService) => {
    expect(service).toBeTruthy();
  }));
});
