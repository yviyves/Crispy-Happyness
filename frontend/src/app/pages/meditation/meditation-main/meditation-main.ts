import { Component, effect, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { verticalSlides } from '../../../shared/animations/basicAnimations';
import { fadeInOut } from '../../../shared/animations/fade.animation';
import { OverlayService } from '../../../shared/components/overlay/overlay-service';
import { FormatTimePipe } from '../../../shared/pipes/format-time.pipe';
import { MeditationQuotesService } from '../services/meditation-quotes-service';
import { MeditationTimerService } from '../services/meditation-timer-service';

@Component({
  selector: 'app-meditation-main',
  imports: [
    MatButtonModule,
    FormatTimePipe,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './meditation-main.html',
  styleUrls: ['./meditation-main.scss'],
  standalone: true,
  animations: [verticalSlides, fadeInOut(0)],
})
export class MeditationMain implements OnInit {
  meditationTimerService = inject(MeditationTimerService);
  meditationQuotesService = inject(MeditationQuotesService);
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

  randomMeditationQuote = this.meditationQuotesService.getRandomQuote();

  constructor() {
    effect(() => {
      if (this.meditationTimerService.meditationHasStopped()) {
        this.overlayService.showOverlay.set(true);
        setTimeout(() => {
          this.overlayService.showOverlay.set(false);
        }, 2000);
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
