import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-main',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login-main.html',
  styleUrl: './login-main.scss',
  standalone: true,
})
export class LoginMain {
  router = inject(Router);
  http = inject(HttpClient);
  private _snackBar = inject(MatSnackBar);

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit(event: Event) {
    event.preventDefault(); // This prevents the default form submission

    this.http
      .post('http://localhost:3000/login', {
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
