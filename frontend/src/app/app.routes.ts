import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import(
        /* webpackChunkName: "login-main" */ './pages/login/login-main/login-main'
      ).then((m) => m.LoginMain),
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        /* webpackChunkName: "register-main" */ './pages/registration/registration-main/registration-main'
      ).then((m) => m.RegistrationMain),
  },
  {
    path: 'discover',
    loadComponent: () =>
      import(
        /* webpackChunkName: "register-main" */ './pages/meditation/meditation-main/meditation-main'
      ).then((m) => m.MeditationMain),
  },
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
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
