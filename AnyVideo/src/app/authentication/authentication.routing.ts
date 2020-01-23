import { Routes } from '@angular/router';

import { NotFoundComponent } from './404/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { landingpageComponent } from './landingPage/landingpage.component';
import { AuthenticationComponent } from './authentication/authentication.component';


export const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        component: landingpageComponent,
        data: {
          title: 'VideoApex- Download Videos'
        }
      }, 
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
      
    ]
  }
];
