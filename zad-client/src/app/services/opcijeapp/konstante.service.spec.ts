import { TestBed, inject } from '@angular/core/testing';

import { KonstanteService } from './konstante.service';

describe('KonstanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KonstanteService]
    });
  });

  it('should be created', inject([KonstanteService], (service: KonstanteService) => {
    expect(service).toBeTruthy();
  }));
});
