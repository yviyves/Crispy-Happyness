import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-overlay',
  imports: [],
  templateUrl: './overlay.html',
  styleUrl: './overlay.scss',
  standalone: true,
})
export class Overlay implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.to('#overlayBox-1', {
      x: 100,
      duration: 0.4,
      repeat: -1,
      repeatDelay: 0.4,
      yoyo: true,
      ease: 'power2.inOut',
    });
    gsap.to('#overlayBox-2', {
      x: -100,
      duration: 0.6,
      ease: 'expo.inOut',
    });
    gsap.to('#overlayBox-3', {
      x: 100,
      duration: 0.8,
      ease: 'power2.inOut',
    });
    gsap.to('.overlayBox', {
      rotate: 90,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
      ease: 'power2.inOut',
    });
  }
}
