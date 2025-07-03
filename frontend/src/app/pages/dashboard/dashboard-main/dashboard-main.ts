import { Component } from '@angular/core';
import { DashboardCard } from '../dashboard-card/dashboard-card';

@Component({
  selector: 'app-dashboard-main',
  imports: [DashboardCard],
  templateUrl: './dashboard-main.html',
  styleUrl: './dashboard-main.scss',
  standalone: true,
})
export class DashboardMain {
  tasks: any[] = [1, 2, 3];
}
