import { Component, effect, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  Router,
  RouterModule,
  RouterOutlet,
  NavigationEnd,
} from '@angular/router';
import { gsap } from 'gsap';
import { Header } from './layout/header/header';
import { SideNavIsExtendedStore } from './layout/services/side-nav-is-extended-store';
import { SideNavigation } from './layout/side-navigation/side-navigation';
import { fadeInOut } from './shared/animations/fade.animation';
import { Overlay } from './shared/components/overlay/overlay';
import { OverlayService } from './shared/components/overlay/overlay-service';
import { filter, take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatDrawerContainer,
    MatListModule,
    CommonModule,
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
  protected router = inject(Router);
  protected isInitialized = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
        this.isInitialized = true;
      });

    effect(() => {
      if (this.overlayService.showOverlay()) {
        gsap.to('#content', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      } else {
        gsap.to('#content', {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      }
    });
  }

  isLoginOrRegistrationPage(): boolean {
    if (!this.isInitialized) return true;
    return this.router.url === '/login' || this.router.url === '/register';
  }
}
