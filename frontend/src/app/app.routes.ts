import { Routes } from '@angular/router';
import { DashboardMain } from './pages/dashboard/dashboard-main/dashboard-main';
import { NotesMain } from './pages/notes/notes-main/notes-main';

export const routes: Routes = [
  {
    path: 'notes',
    component: NotesMain,
  },
  {
    path: 'dashboard',
    component: DashboardMain,
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
