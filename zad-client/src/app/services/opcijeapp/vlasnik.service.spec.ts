import { TestBed, inject } from '@angular/core/testing';

import { VlasnikService } from './vlasnik.service';

describe('VlasnikService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VlasnikService]
    });
  });

  it('should be created', inject([VlasnikService], (service: VlasnikService) => {
    expect(service).toBeTruthy();
  }));
});
