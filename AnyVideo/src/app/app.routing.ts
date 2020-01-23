import { Routes } from '@angular/router';

import { BlankComponent, FullComponent } from './shared';
import { landingpageComponent } from './authentication/landingPage';

export const AppRoutes: Routes = [
 
  {
    path: 'admin',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            m => m.AuthenticationModule
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
