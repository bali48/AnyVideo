import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { UserService } from './service/user.service';
import { UtilService } from './service/util.service';
import { ErrorMessageService } from './service/error-message.service';
import { HttpService } from './http/http.service';
import { RouteReusableStrategy } from './route-reusable-strategy';
// import { LocalStorageService, AuthenticationService,
//     AuthenticationGuard, ApiPrefixInterceptor,
//     ErrorHandlerInterceptor, UserService, UtilService,
//     ErrorMessageService, HttpService, RouteReusableStrategy } from '.';
// import {
//   AuthenticationGuard,
//   AuthenticationService
// } from '@app/core/authentication';
// import {
//   ApiPrefixInterceptor,
//   ErrorHandlerInterceptor,
//   HttpService
// } from '@app/core/http';
// import { LocalStorageService } from '@app/core/local-storage.service';
// import { RouteReusableStrategy } from '@app/core/route-reusable-strategy';
// import {
//   ErrorMessageService,
//   UserService,
//   UtilService
// } from '@app/core/service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [],
  providers: [
    LocalStorageService,
    AuthenticationService,
    AuthenticationGuard,
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    UserService,
    UtilService,
    ErrorMessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})
export class CoreModule {}
