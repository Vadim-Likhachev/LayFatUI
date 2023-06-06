import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './components/login-page/login-page.module';
import { RegisterPageModule } from './components/register-page/register-page.module';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptors } from './shared/classes/token.interceptors';
import { CabinetModule } from './components/cabinet/cabinet.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginPageModule,
    AppRoutingModule,
    RegisterPageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CabinetModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptors
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
