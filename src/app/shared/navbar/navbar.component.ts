import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // myrouts=[
  //     {path:"",key:"home", attr:''},
  //     {path:"user/register",key:"register", isAuth:false, attr:''},
  //     {path:"user/login",key:"login",isAuth:false, attr:''}
  // ]
  // myLoggedRoutes=[
  //   {path:"",key:"home", attr:''},
  //     {path:"user/profile",key:"profile",isAuth:true, attr:''},
  //   {path:"user/logoutall",key:"logoutall", isAuth:true, attr:''},
      
  //     {path:"todo/addtodo",key:"addtodo",isAuth:true, attr:''},
  //     {path:"todo/mytodos",key:"mytodos",isAuth:true, attr:''},
  //     {path:"todo/singletodo",key:"singletodo",isAuth:true, attr:''},
      
    
  // ]
  

  constructor(public _global:GlobalService ,private _router:Router) { }

  ngOnInit(): void {
    
  }
// logout(){
//   this._global.logout().subscribe(data=>{
//     console.log(data.data.token)
//     this._global.isLoggedIn = false
    
//     localStorage.removeItem('TodoAppToken')
//   },
//   ()=>{},
//   ()=>{
//     this._global.navMenu=this._global.myLoggedRoutes
//     this._router.navigateByUrl('')
//   })
// }
logout(){
  this._global.logout().subscribe(
    data=>{},
    ()=>{},
    ()=>{
      this._global.isLoggedIn=false
      localStorage.removeItem('TodoAppToken')
      this._router.navigateByUrl('/user/login')
    }
  )
}
}
