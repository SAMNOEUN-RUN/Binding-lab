import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/directive', pathMatch: 'full' },
  {
    path: 'directive',
    loadComponent: () =>
      import('./directive.component').then(
        (c) => c.DirectiveComponent
      ),
    title: 'Directive',
  },
  {
    path: 'component-directive',
    loadComponent: () =>
      import('./component-directive/component-directive.component').then(
        (c) => c.ComponentDirectiveComponent
      ),
    title: 'Component Directive',
  },
  {
    path: 'attribute-directive',
    loadComponent: () =>
      import('./attribute-directive/attribute-directive.component').then(
        (c) => c.AttributeDirectiveComponent
      ),
    title: 'Attribute Directive',
  },
  {
    path: 'structural-directive',
    loadComponent: () =>
      import('./structural-directive/structural-directive.component').then(
        (c) => c.StructuralDirectiveComponent
      ),
    title: 'Structural Directive',
  },
];
