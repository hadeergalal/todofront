import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // msg=""
  //  userData = {
  //   name:"",
  //   email:"",
  //   password:"",
  //   age:"",
  //   phone:"" 
  // }
    
  msg = ""
  registerForm = new FormGroup({
    name:new FormControl('', [Validators.required,  Validators.maxLength(20)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(),
    phone:new FormControl()
  })
  get name(){return this.registerForm.get('name')}
  get age(){ return this.registerForm.get('age')}
  get password(){ return this.registerForm.get('password')}
  get email(){ return this.registerForm.get('email')}
  get phone(){return this.registerForm.get('phone')}

  constructor(private _global:GlobalService,private _router:Router) { }

  ngOnInit(): void {
  }


register(){
  if(this.registerForm.valid){
    this._global.register(this.registerForm.value).subscribe(
      data=>{ console.log(data) },
      (e)=>{
        if(e.error.includes('email')) this.msg= "please choose another email"
        else if(e.error.includes('name')) this.msg= "please choose another name"
        else if(e.error.includes('password')) this.msg= "please choose another pass"
        },
      ()=>{
        this.msg = "successfully registered" 
        this._global.isLoggedIn=true
        this.registerForm.reset()
        this._router.navigateByUrl('/todo/addtodo')
      }
      )
  }

}
}
  
