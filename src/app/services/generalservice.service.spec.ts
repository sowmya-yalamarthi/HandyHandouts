import { TestBed } from '@angular/core/testing';

import { GeneralserviceService } from './generalservice.service';

describe('GeneralserviceService', () => {
  let service: GeneralserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
