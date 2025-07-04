import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeditationTimerService {
  meditationIsRunning = signal<boolean>(false);
  remainingDurationInSeconds = signal(0);
  meditationHasStopped = signal<boolean>(false);

  startMeditationTimer(durationInSeconds: number) {
    this.meditationIsRunning.set(true);
    this.remainingDurationInSeconds.set(durationInSeconds);

    console.log('Meditation started.');
    const interval = setInterval(() => {
      this.remainingDurationInSeconds.set(
        this.remainingDurationInSeconds() - 1
      );
      if (this.remainingDurationInSeconds() === durationInSeconds / 2) {
        console.log('Half of the meditation time is over.');
      }

      if (this.remainingDurationInSeconds() === 0) {
        console.log('Meditation finished.');
        this.meditationIsRunning.set(false);
        this.meditationHasStopped.set(true);
        clearInterval(interval);
      }
    }, 1000);
  }

  clear() {
    this.meditationIsRunning.set(false);
    this.remainingDurationInSeconds.set(0);
    this.meditationHasStopped.set(false);
  }
}
