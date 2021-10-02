import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
 todoform = new FormGroup({
  

    content:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required])

  })
 

  get content(){ return this.todoform.get('content')}
  get  category(){ return this.todoform.get('category')}
  get   date(){ return this.todoform.get('date')}

   constructor(public _global:GlobalService, private _router:Router) { }

  ngOnInit(): void {
  }
  addTodo(){
    
    if(this.todoform.valid){
      this._global.addtodo(this.todoform.value).subscribe(data=>{
        console.log(data)
      },
      ()=>{},
      ()=>{this._router.navigateByUrl('todo/mytodos')}
      )
    }
    

      }
 


}
