import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './side-navigation.html',
  styleUrl: './side-navigation.scss',
  standalone: true,
})
export class SideNavigation {}
