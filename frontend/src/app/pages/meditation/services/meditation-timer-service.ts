import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeditationTimerService {
  meditationIsRunning = signal<boolean>(false);
  remainingDurationInSeconds = signal(0);
  meditationHasStopped = signal<boolean>(false);

  private completionSound = new Audio('singing_bowl.mp3');

  constructor() {
    this.completionSound.load();
  }

  startMeditationTimer(durationInSeconds: number) {
    this.meditationIsRunning.set(true);
    this.remainingDurationInSeconds.set(durationInSeconds);
    this.playCompletionSound();

    console.log('Meditation started.');
    const interval = setInterval(() => {
      this.remainingDurationInSeconds.set(
        this.remainingDurationInSeconds() - 1
      );
      if (
        this.remainingDurationInSeconds() ===
        Math.floor((durationInSeconds * 3) / 4)
      ) {
        this.playCompletionSound();
        console.log('One-quarter of the meditation time is over.');
      } else if (
        this.remainingDurationInSeconds() === Math.floor(durationInSeconds / 2)
      ) {
        this.playCompletionSound();
        console.log('Half of the meditation time is over.');
      } else if (
        this.remainingDurationInSeconds() ===
        Math.floor((durationInSeconds * 1) / 4)
      ) {
        this.playCompletionSound();
        console.log('Three-quarters of the meditation time is over.');
      } else if (this.remainingDurationInSeconds() === 0) {
        console.log('Meditation finished.');
        this.playCompletionSound();
        this.meditationIsRunning.set(false);
        this.meditationHasStopped.set(true);
        clearInterval(interval);
      }
    }, 1000);
  }

  private playCompletionSound() {
    this.completionSound.currentTime = 0;
    this.completionSound
      .play()
      .catch((e) => console.error('Error playing sound:', e));
  }

  clear() {
    this.meditationIsRunning.set(false);
    this.remainingDurationInSeconds.set(0);
    this.meditationHasStopped.set(false);
  }
}
