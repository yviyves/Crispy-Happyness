import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeditationTimerService {
  meditationIsRunning = signal<boolean>(false);
  remainingDurationInSeconds = signal(0);
  meditationHasStopped = signal<boolean>(false);

  countingInterval: any;

  private partialSound = new Audio('partial_bowl.ogg');
  private completionSound = new Audio('singing_bowl.mp3');

  constructor() {
    this.completionSound.load();
    this.partialSound.load();
  }

  startMeditationTimer(durationInSeconds: number) {
    this.meditationIsRunning.set(true);
    this.remainingDurationInSeconds.set(durationInSeconds);
    this.playCompletionSound();

    console.log('Meditation started.');
    this.countingInterval = setInterval(() => {
      this.remainingDurationInSeconds.set(
        this.remainingDurationInSeconds() - 1
      );
      if (
        this.remainingDurationInSeconds() ===
        Math.floor((durationInSeconds * 3) / 4)
      ) {
        this.playPartialSound();
        console.log('One-quarter of the meditation time is over.');
      } else if (
        this.remainingDurationInSeconds() === Math.floor(durationInSeconds / 2)
      ) {
        this.playPartialSound();
        console.log('Half of the meditation time is over.');
      } else if (
        this.remainingDurationInSeconds() ===
        Math.floor((durationInSeconds * 1) / 4)
      ) {
        this.playPartialSound();
        console.log('Three-quarters of the meditation time is over.');
      } else if (this.remainingDurationInSeconds() === 0) {
        console.log('Meditation finished.');
        this.playCompletionSound();
        this.meditationIsRunning.set(false);
        this.meditationHasStopped.set(true);
        clearInterval(this.countingInterval);
      }
    }, 1000);
  }

  private playCompletionSound() {
    this.completionSound.currentTime = 0;
    this.completionSound
      .play()
      .catch((e) => console.error('Error playing sound:', e));
  }

  private playPartialSound() {
    this.partialSound.currentTime = 0;
    this.partialSound
      .play()
      .catch((e) => console.error('Error playing sound:', e));
  }

  clear() {
    this.meditationIsRunning.set(false);
    this.remainingDurationInSeconds.set(0);
    this.meditationHasStopped.set(false);
    clearInterval(this.countingInterval);
  }
}
