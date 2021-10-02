import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogedinGuard } from './guards/logedin.guard';
import { NotlogedGuard } from './guards/notloged.guard';
import { AddtodoComponent } from './pages/addtodo/addtodo.component';
import { AlltodosComponent } from './pages/alltodos/alltodos.component';

import { EdittodoComponent } from './pages/edittodo/edittodo.component';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LogoutallComponent } from './pages/logoutall/logoutall.component';

import { MytodosComponent } from './pages/mytodos/mytodos.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingletodoComponent } from './pages/singletodo/singletodo.component';

const routes: Routes = [
  {path:"",component:HomeComponent},

  {path:"user",children:[

  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"logout",component:LogoutComponent},
  {path:"logoutall",component:LogoutallComponent}
  ]},
  
 {path:"todo",children:[
  {path:"addtodo",component:AddtodoComponent},
  
  {path:"singletodo/:id",component:SingletodoComponent},
  {path:"alltodos",component:AlltodosComponent},
  {path:"mytodos",component:MytodosComponent},
  {path:"edittodo/:id",component:EdittodoComponent}
 ]},
 {path:"**", component:Err404Component}
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
