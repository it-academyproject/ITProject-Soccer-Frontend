import { TestBed } from '@angular/core/testing';

import { UserlistService } from './userlist.service';

describe('UserListService', () => {
  let service: UserlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
