import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  verticalSlide,
  verticalSlides,
} from '../../../shared/animations/basicAnimations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApiService } from '../../../shared/services/api-service';
interface MeditationSession {
  id: number;
  duration: number;
  date: string;
}

@Component({
  selector: 'app-notes-main',
  imports: [DatePipe, NgApexchartsModule, CommonModule],
  templateUrl: './notes-main.html',
  styleUrl: './notes-main.scss',
  standalone: true,
  animations: verticalSlides,
})
export class NotesMain implements OnInit {
  apiService = inject(ApiService);
  mySessions: MeditationSession[] = [];

  ngOnInit(): void {
    this.apiService
      .get<MeditationSession[]>('meditation-sessions')
      .subscribe((sessions) => {
        this.mySessions = sessions.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      });
  }

  getLongestSession() {
    return this.mySessions.reduce((a, b) => (a.duration > b.duration ? a : b));
  }

  getTotalDuration() {
    return this.mySessions.reduce((a, b) => a + b.duration, 0);
  }
}
