import { TestBed, inject } from '@angular/core/testing';

import { KonstantaService } from './konstanta.service';

describe('KonstantaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KonstantaService]
    });
  });

  it('should be created', inject([KonstantaService], (service: KonstantaService) => {
    expect(service).toBeTruthy();
  }));
});
