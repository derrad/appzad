import { TestBed, inject } from '@angular/core/testing';

import { OpstineService } from './opstine.service';

describe('OpstineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpstineService]
    });
  });

  it('should be created', inject([OpstineService], (service: OpstineService) => {
    expect(service).toBeTruthy();
  }));
});
