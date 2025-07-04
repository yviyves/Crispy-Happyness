import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('1000ms ease-in-out', style({ opacity: 0 }))]),
]);
