import { Component, ElementRef, ViewChild } from '@angular/core';
import { DashboardCard } from '../dashboard-card/dashboard-card';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard-main',
  imports: [DashboardCard, CdkDrag],
  templateUrl: './dashboard-main.html',
  styleUrl: './dashboard-main.scss',
  standalone: true,
})
export class DashboardMain {
  @ViewChild('container') container!: ElementRef<HTMLElement>;

  tasks: any[] = [1];
}
