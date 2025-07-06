import { Component, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { SideNavIsExtendedStore } from '../services/side-nav-is-extended-store';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
})
export class Header {
  sideNavIsExtendedStore = inject(SideNavIsExtendedStore);
  router = inject(Router);

  constructor() {
    effect(() => {
      if (this.sideNavIsExtendedStore.isExtended()) {
        gsap.to('#menu-icon', {
          rotate: 0,
          duration: 0.25,
          ease: 'power2.inOut',
        });
      } else {
        gsap.to('#menu-icon', {
          rotate: 90,
          duration: 0.25,
          ease: 'power2.inOut',
        });
      }
    });
  }

  toggleSideNav() {
    this.sideNavIsExtendedStore.isExtended.update((value) => !value);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
