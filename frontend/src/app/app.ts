import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { SideNavigation } from './layout/side-navigation/side-navigation';
import { SideNavIsExtendedStore } from './layout/services/side-nav-is-extended-store';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatDrawerContainer,
    MatListModule,
    MatTooltipModule,
    RouterModule,
    Header,
    SideNavigation,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected title = 'frontend';
  protected sideNavIsExtendedStore = inject(SideNavIsExtendedStore);
}
