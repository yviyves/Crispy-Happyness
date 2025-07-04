import { Component, inject, effect, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MeditationTimerService } from '../services/meditation-timer-service';
import { FormatTimePipe } from '../../../shared/pipes/format-time.pipe';
import { verticalSlide } from '../../../shared/animations/basicAnimations';
import { OverlayService } from '../../../shared/components/overlay/overlay-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LottieComponent } from 'ngx-lottie';
import { fadeInOut } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-meditation-main',
  imports: [
    MatButtonModule,
    FormatTimePipe,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    LottieComponent,
  ],
  templateUrl: './meditation-main.html',
  styleUrls: ['./meditation-main.scss'],
  standalone: true,
  animations: [verticalSlide, fadeInOut(0)],
})
export class MeditationMain implements OnInit {
  meditationTimerService = inject(MeditationTimerService);
  overlayService = inject(OverlayService);
  durationFormControl = new FormControl<number | null>(5, {
    validators: [
      Validators.required,
      Validators.min(1),
      Validators.max(120),
      Validators.pattern('^[1-9]\\d*$'),
    ],
    nonNullable: true,
  });

  meditationAnimation = {
    path: 'meditation.json',
    autoplay: true,
    loop: true,
  };

  constructor() {
    effect(() => {
      if (this.meditationTimerService.meditationHasStopped()) {
        this.overlayService.showOverlay.set(true);
        setTimeout(() => {
          this.overlayService.showOverlay.set(false);
        }, 4000);
      }
    });
  }

  ngOnInit() {
    this.meditationTimerService.clear();
  }

  startMeditation() {
    this.meditationTimerService.startMeditationTimer(
      this.durationFormControl.value! * 60
    );
  }

  stopMeditation() {
    this.meditationTimerService.clear();
  }
}
