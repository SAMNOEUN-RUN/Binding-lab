import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(m => m.LoginComponent),
    title: 'Login',
  },
  {
    path: 'binding',
    loadComponent: () =>
      import('./feature/binding/binding.component').then(m => m.BindingComponent),
    title: 'Binding',
  },
  {
    path: 'component',
    loadComponent: () =>
      import('./feature/component/component.component').then(m => m.ComponentComponent),
    title: 'Component',
  },

  // Directive section
  {
    path: 'directive',
    loadComponent: () =>
      import('./feature/directive/directive.component').then(m => m.DirectiveComponent),
    children: [
      { path: '', redirectTo: 'component-directive', pathMatch: 'full' },
      {
        path: 'component-directive',
        loadComponent: () =>
          import('./feature/directive/component-directive/component-directive.component')
            .then(m => m.ComponentDirectiveComponent),
        title: 'Component Directive',
      },
      {
        path: 'attribute-directive',
        loadComponent: () =>
          import('./feature/directive/attribute-directive/attribute-directive.component')
            .then(m => m.AttributeDirectiveComponent),
        title: 'Attribute Directive',
      },
      {
        path: 'structural-directive',
        loadComponent: () =>
          import('./feature/directive/structural-directive/structural-directive.component')
            .then(m => m.StructuralDirectiveComponent),
        title: 'Structural Directive',
      },
    ],
  },

  {
    path: 'routing',
    loadComponent: () =>
      import('./feature/routing/routing.component').then(m => m.RoutingComponent),
    title: 'Routing',
  },
  { path: '**', redirectTo: '/login' }
];
