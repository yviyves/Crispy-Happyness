import { AfterViewInit, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ApiService } from '../../../shared/services/api-service';
import { CommonModule } from '@angular/common';
import { GeneralBackground } from '../../../shared/components/general-background/general-background';

@Component({
  selector: 'app-login-main',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
    GeneralBackground,
  ],
  templateUrl: './login-main.html',
  styleUrl: './login-main.scss',
  standalone: true,
})
export class LoginMain implements AfterViewInit {
  router = inject(Router);
  apiService = inject(ApiService);
  private _snackBar = inject(MatSnackBar);

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngAfterViewInit(): void {
    gsap.fromTo(
      '#letter',
      { xPercent: 0 },
      {
        xPercent: 40,
        duration: 1,
        delay: 0.6,
        ease: 'expo.inOut',
      }
    );
    gsap.fromTo(
      '#login-card',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
    gsap.fromTo(
      '#image',
      { yPercent: 20 },
      {
        yPercent: 0,
        duration: 1,
        delay: 0.4,
        ease: 'expo.inOut',
      }
    );
    gsap.fromTo(
      '#impressum',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: 'expo.inOut',
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit(event: Event) {
    event.preventDefault(); // This prevents the default form submission

    this.apiService
      .post('login', {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
      })
      .subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/meditation']);
        },
        error: (error) => {
          console.log('Login failed:', error);
          this.openSnackBar('Login failed', 'Close');
        },
      });
  }
}
