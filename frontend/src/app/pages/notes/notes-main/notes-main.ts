import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-main',
  imports: [],
  templateUrl: './notes-main.html',
  styleUrl: './notes-main.scss',
  standalone: true,
})
export class NotesMain implements OnInit {
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/', { responseType: 'text' })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
