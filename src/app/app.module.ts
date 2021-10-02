import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS}from'@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddtodoComponent } from './pages/addtodo/addtodo.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { UserInterceptor } from './providors/user.interceptor';
import { LogoutComponent } from './pages/logout/logout.component';
import { LogoutallComponent } from './pages/logoutall/logoutall.component';
import { SingletodoComponent } from './pages/singletodo/singletodo.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { AlltodosComponent } from './pages/alltodos/alltodos.component';
import { EdittodoComponent } from './pages/edittodo/edittodo.component';
import { MytodosComponent } from './pages/mytodos/mytodos.component';
import { Err404Component } from './pages/err404/err404.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AddtodoComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LogoutComponent,
    LogoutallComponent,
    SingletodoComponent,
    EditprofileComponent,
    AlltodosComponent,
    EdittodoComponent,
    MytodosComponent,
    Err404Component,
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:UserInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
