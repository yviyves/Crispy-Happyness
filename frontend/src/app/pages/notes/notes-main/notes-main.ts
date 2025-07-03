import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-notes-main',
  imports: [AsyncPipe],
  templateUrl: './notes-main.html',
  styleUrl: './notes-main.scss',
  standalone: true,
})
export class NotesMain {
  http = inject(HttpClient);
  myTest$ = this.http.get('http://localhost:3000/', { responseType: 'text' });
}
