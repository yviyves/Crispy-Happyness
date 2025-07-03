import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { verticalSlide } from '../../../shared/animations/basicAnimations';

@Component({
  selector: 'app-dashboard-card',
  imports: [MatIconModule, CommonModule],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.scss',
  standalone: true,
  animations: [verticalSlide],
})
export class DashboardCard {
  task: any;
  deleteTask() {
    throw new Error('Method not implemented.');
  }
  showDetails: any;
  updateDescription($event: Event) {
    throw new Error('Method not implemented.');
  }
}
