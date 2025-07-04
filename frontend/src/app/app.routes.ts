import { Routes } from '@angular/router';
import { DashboardMain } from './pages/dashboard/dashboard-main/dashboard-main';
import { NotesMain } from './pages/notes/notes-main/notes-main';
import { MeditationMain } from './pages/meditation/meditation-main/meditation-main';

export const routes: Routes = [
  {
    path: 'notes',
    component: NotesMain,
  },
  {
    path: 'meditation',
    component: MeditationMain,
  },
  {
    path: 'notes',
    component: DashboardMain,
  },
  {
    path: '**',
    redirectTo: '/notes',
    pathMatch: 'full',
  },
];
