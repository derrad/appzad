import { TestBed, inject } from '@angular/core/testing';

import { ParametarService } from './parametar.service';

describe('ParametarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParametarService]
    });
  });

  it('should be created', inject([ParametarService], (service: ParametarService) => {
    expect(service).toBeTruthy();
  }));
});
