import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  showOverlay = signal(false);
}
