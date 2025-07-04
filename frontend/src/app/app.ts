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
import { Overlay } from './shared/components/overlay/overlay';
import { OverlayService } from './shared/components/overlay/overlay-service';
import { fadeInOut } from './shared/animations/fade.animation';
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
    Overlay,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  animations: [
    fadeInOut(0, 'header'),
    fadeInOut(300, 'sideNav'),
    fadeInOut(600, 'content'),
  ],
})
export class App {
  protected sideNavIsExtendedStore = inject(SideNavIsExtendedStore);
  protected overlayService = inject(OverlayService);
}
