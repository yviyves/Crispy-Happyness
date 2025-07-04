import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-overlay',
  imports: [LottieComponent],
  templateUrl: './overlay.html',
  styleUrl: './overlay.scss',
  standalone: true,
})
export class Overlay {
  celebrationOptions = {
    path: 'check.json',
    autoplay: true,
    loop: false,
  };

  animationCreated(animation: AnimationItem): void {
    animation.play();
  }
}
