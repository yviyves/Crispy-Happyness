import { AsyncPipe, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { verticalSlide } from '../../../shared/animations/basicAnimations';

interface MeditationSession {
  id: number;
  duration: number;
  date: string;
}

@Component({
  selector: 'app-notes-main',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './notes-main.html',
  styleUrl: './notes-main.scss',
  standalone: true,
  animations: [verticalSlide],
})
export class NotesMain {
  http = inject(HttpClient);
  mySessions$ = this.http.get<MeditationSession[]>(
    'http://localhost:3000/meditation-sessions'
  );
}
