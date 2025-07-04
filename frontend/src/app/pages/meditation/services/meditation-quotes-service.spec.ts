import { TestBed } from '@angular/core/testing';

import { MeditationQuotesService } from './meditation-quotes-service';

describe('MeditationQuotesService', () => {
  let service: MeditationQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeditationQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
