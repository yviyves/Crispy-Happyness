import { TestBed } from '@angular/core/testing';

import { MeditationTimerService } from './meditation-timer-service';

describe('MeditationTimerService', () => {
  let service: MeditationTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeditationTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
