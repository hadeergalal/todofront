import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//   msg=""
// loginForm =new FormGroup({
// email:new FormControl('',[Validators.email,Validators.required]),
// password:new FormControl('',[Validators.minLength(4),Validators.required])

// })
// get email(){return this.loginForm.get('email')}
// get password(){return this.loginForm.get('password')}
msg = ""
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(3)]),
  })
  get password(){ return this.loginForm.get('password')}
  get email(){ return this.loginForm.get('email')}

  constructor(public _global:GlobalService,private _router:Router) { }

  ngOnInit(): void {
  }
  
    // if(this.loginForm.valid){
      
    // }
  //   login(){
  //   this._global.login(this.loginForm.value).subscribe(data=>
  //     {
  //       console.log(data)
  //       localStorage.setItem('TodoAppToken', `Bearer ${data.data.token}`)
  //     },
  //     ()=>{},
  //     ()=>{
  //       this._global.isLoggedIn=true
  //       this._global.navMenu = this._global.myRoutes
  //       this._router.navigateByUrl('/user/profile')
        
  //     }
  //     )
  // }
  login(){
    if(this.loginForm.valid){
      this._global.login(this.loginForm.value).subscribe(
        data=>{ 
          localStorage.setItem('TodoAppToken',data.data.token)
          console.log(data)
         },
        (e)=>{
          this.msg = "unauthorized"
          },
        ()=>{
          this._global.isLoggedIn=true
         // this._global.navMenu = this._global.myLoggedRoutes
          this.loginForm.reset()
          this._router.navigateByUrl('todo/mytodos')
        }
        )
      }
  }

}
