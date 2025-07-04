import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOut = (delay: number = 0, name: string = 'fadeInOut') =>
  trigger(name, [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(`500ms ${delay}ms ease-in-out`, style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate(`500ms ${delay}ms ease-in-out`, style({ opacity: 0 })),
    ]),
  ]);
