import { Injectable } from '@angular/core';
import { MEDITATION_QUOTES } from './meditation-quotes';

@Injectable({
  providedIn: 'root',
})
export class MeditationQuotesService {
  meditationQuotes = MEDITATION_QUOTES;

  getRandomQuote() {
    const randomIndex = Math.floor(
      Math.random() * this.meditationQuotes.length
    );
    return this.meditationQuotes[randomIndex];
  }
}
