import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'notes',
    loadComponent: () =>
      import(
        /* webpackChunkName: "notes-main" */ './pages/notes/notes-main/notes-main'
      ).then((m) => m.NotesMain),
  },
  {
    path: 'meditation',
    loadComponent: () =>
      import(
        /* webpackChunkName: "meditation-main" */ './pages/meditation/meditation-main/meditation-main'
      ).then((m) => m.MeditationMain),
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        /* webpackChunkName: "login-main" */ './pages/login/login-main/login-main'
      ).then((m) => m.LoginMain),
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
