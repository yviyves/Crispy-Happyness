import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'notes',
    loadComponent: () =>
      import('./pages/notes/notes-main/notes-main').then((m) => m.NotesMain),
  },
  {
    path: 'meditation',
    loadComponent: () =>
      import('./pages/meditation/meditation-main/meditation-main').then(
        (m) => m.MeditationMain
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login-main/login-main').then((m) => m.LoginMain),
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
