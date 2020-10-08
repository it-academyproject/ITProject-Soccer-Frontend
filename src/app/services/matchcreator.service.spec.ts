import { TestBed } from '@angular/core/testing';

import { MatchcreatorService } from './matchcreator.service';

describe('MatchcreatorService', () => {
  let service: MatchcreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchcreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
