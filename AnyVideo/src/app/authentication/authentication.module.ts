import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutes } from './authentication.routing';
import { NotFoundComponent } from './404/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { landingpageComponent } from './landingPage';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild(AuthenticationRoutes)
  ],
  declarations: [NotFoundComponent, SignupComponent,
     LoginComponent, landingpageComponent, AuthenticationComponent],
     bootstrap: [AuthenticationComponent]   
})
export class AuthenticationModule {}
