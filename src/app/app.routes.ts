import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/binding', pathMatch: 'full' },
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
];
