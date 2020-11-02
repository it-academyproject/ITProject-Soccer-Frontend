import { TestBed } from '@angular/core/testing';

import { MarketPlayersService } from './market-players.service';

describe('MarketPlayersService', () => {
  let service: MarketPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
