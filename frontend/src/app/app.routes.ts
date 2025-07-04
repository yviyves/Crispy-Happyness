import { Routes } from '@angular/router';
import { DashboardMain } from './pages/dashboard/dashboard-main/dashboard-main';
import { NotesMain } from './pages/notes/notes-main/notes-main';
import { MeditationMain } from './pages/meditation/meditation-main/meditation-main';
import { LoginMain } from './pages/login/login-main/login-main';

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
    path: 'login',
    component: LoginMain,
  },
  {
    path: '**',
    redirectTo: '/notes',
    pathMatch: 'full',
  },
];
