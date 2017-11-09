import { TestBed, inject } from '@angular/core/testing';

import { BankeService } from './banke.service';

describe('BankeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankeService]
    });
  });

  it('should be created', inject([BankeService], (service: BankeService) => {
    expect(service).toBeTruthy();
  }));
});
