import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
@Component({
  selector: 'app-general-background',
  imports: [CommonModule],
  templateUrl: './general-background.html',
  styleUrl: './general-background.scss',
  standalone: true,
})
export class GeneralBackground implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.to('#box', {
      rotate: 90,
      duration: 1.5,
      repeat: -1,
      repeatDelay: 10,
      yoyo: true,
      ease: 'power2.inOut',
    });
    gsap.to('.special-box', {
      scale: 1.1,
      duration: 1,
      repeatDelay: 2,
      repeat: -1,
      yoyo: true,
      ease: 'expo.inOut',
    });
  }

  opacityForBox(row: number) {
    if (row === 3) {
      return 0.2;
    } else if (row === 4 || row === 2) return 0.5;
    else return 0.75;
  }

  isSpecialBox(row: number, col: number) {
    if ([1, 2, 5].includes(row) && [1, 2, 7, 4, 9].includes(col)) {
      return true;
    } else return false;
  }

  getBoxColor(row: number, col: number): string {
    // Base blue color values
    const baseHue = 200; // Blue hue
    const baseSaturation = 70; // Saturation percentage

    // Calculate variations based on position
    const hueVariation = (row * 10 + col * 2) % 30; // Adds subtle hue variation
    const saturationVariation = 5; // Small saturation variation
    const lightnessVariation = (row * 3 + col * 2) % 20; // Creates a pattern

    // Calculate final HSL values
    const hue = (baseHue + hueVariation) % 360;
    const saturation = Math.max(
      30,
      Math.min(
        90,
        baseSaturation + (row % 2 ? -saturationVariation : saturationVariation)
      )
    );
    const lightness = 75 + lightnessVariation / 2; // Keep it light

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  private seededRandom(seed: number): number {
    const x = Math.cos(seed) * 10000;
    return x - Math.floor(x);
  }

  hideBox(row: number, col: number): boolean {
    // Create a unique seed for each cell
    const seed = row * 0x1f1f1f1f + col * 0x9e3779b9;
    // Get a random value between 0 and 1 using the seeded random
    const random = this.seededRandom(seed);
    // Return true for ~50% of the boxes
    return random < 0.5;
  }
}
