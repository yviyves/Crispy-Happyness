import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { verticalSlides } from '../../../shared/animations/basicAnimations';
import { fadeInOut } from '../../../shared/animations/fade.animation';
import { gsap } from 'gsap';

@Component({
  selector: 'app-registration-main',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './registration-main.html',
  styleUrl: './registration-main.scss',
  animations: [verticalSlides, fadeInOut()],
})
export class RegistrationMain implements AfterViewInit {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordConfirmation: new FormControl('', [Validators.required]),
  });

  ngAfterViewInit(): void {
    gsap.fromTo(
      '#box',
      { x: 75 },
      {
        x: 0,
        duration: 0.4,
        repeat: -1,
        stagger: 0.05,
        repeatDelay: 2.5,
        yoyo: true,
        ease: 'power2.inOut',
      }
    );
    gsap.fromTo(
      '#alt_box',
      { x: 200 },
      {
        x: 100,
        duration: 0.4,
        repeat: -1,
        stagger: 0.3,
        repeatDelay: 3.66,
        yoyo: true,
        ease: 'power2.inOut',
      }
    );
  }
}
