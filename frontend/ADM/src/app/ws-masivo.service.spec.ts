import { TestBed } from '@angular/core/testing';

import { WsMasivoService } from './ws-masivo.service';

describe('WsMasivoService', () => {
  let service: WsMasivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsMasivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
