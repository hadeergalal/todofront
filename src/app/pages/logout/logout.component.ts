import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _global:GlobalService, private _router:Router) { }
 
  ngOnInit(): void {
  }
//   logout(){
//     this._global.logout().subscribe(
//       data=>{  localStorage.removeItem('TodoAppToken') },
//       ()=>{},
//       ()=>{
//         this._global.isLoggedIn=false
//         this._global.navMenu = this._global.myRoutes
//         this._router.navigateByUrl('/login')
//       }
 
//     )
// }
}
