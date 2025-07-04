import { Component, inject, effect, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MeditationTimerService } from '../services/meditation-timer-service';
import { FormatTimePipe } from '../../../shared/pipes/format-time.pipe';
import { verticalSlide } from '../../../shared/animations/basicAnimations';
import { OverlayService } from '../../../shared/components/overlay/overlay-service';

@Component({
  selector: 'app-meditation-main',
  imports: [MatButtonModule, FormatTimePipe],
  templateUrl: './meditation-main.html',
  styleUrls: ['./meditation-main.scss'],
  standalone: true,
  animations: [verticalSlide],
})
export class MeditationMain implements OnInit {
  meditationTimerService = inject(MeditationTimerService);
  overlayService = inject(OverlayService);

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
    this.meditationTimerService.startMeditationTimer(30);
  }
}
