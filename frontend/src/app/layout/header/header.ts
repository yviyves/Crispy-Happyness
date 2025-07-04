import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SideNavIsExtendedStore } from '../services/side-nav-is-extended-store';
import { Router } from '@angular/router';

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

  toggleSideNav() {
    this.sideNavIsExtendedStore.isExtended.update((value) => !value);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
