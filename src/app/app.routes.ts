import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '', redirectTo: '/binding', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
      title: 'login',
  },
  {
    path: 'binding',
    loadComponent: () =>
      import('./feature/binding/binding.component').then(
        (m) => m.BindingComponent
      ),
      title: 'Binding',
  },
  {
    path: 'component',
    loadComponent: () =>
      import('./feature/component/component.component').then(
        (m) => m.ComponentComponent
      ),
      title: 'Component',
  },
  {
    path: 'directive',
    loadComponent: () =>
      import('./feature/directive/directive.component').then(
        (m) => m.DirectiveComponent
      ),
      title: 'directive',
  },
  {
    path: 'routing',
    loadComponent: () =>
      import('./feature/routing/routing.component').then(
        (m) => m.RoutingComponent
      ),
      title: 'routing',
  }
  
];

