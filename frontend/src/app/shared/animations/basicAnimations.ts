import { animate, style, transition, trigger } from '@angular/animations';

export const verticalSlide = (
  enterDelay: number = 0,
  name: string = 'verticalSlide'
) =>
  trigger(name, [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate(
        `200ms ${enterDelay}ms ease-out`,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
    ]),
    transition(':leave', [animate(`0ms ease-in`, style({ opacity: 0 }))]),
  ]);

export const verticalSlides = [
  verticalSlide(0, 'primary'),
  verticalSlide(200, 'secondary'),
  verticalSlide(400, 'tertiary'),
  verticalSlide(600, 'quaternary'),
  verticalSlide(800, 'quinary'),
];
