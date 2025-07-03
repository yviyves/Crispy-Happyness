import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideNavIsExtendedStore {
  isExtended = signal(true);
}
