import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  todoeditform = new FormGroup({
    

    content:new FormControl('',[Validators.required]),
    category:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required])

  })
 

  get content(){ return this.todoeditform.get('content')}
  get  category(){ return this.todoeditform.get('category')}
  get   date(){ return this. todoeditform.get('date')}

  constructor(public _global:GlobalService, private _router:Router,private _rout:ActivatedRoute) { }

  ngOnInit(): void {
  }
  edittodo(){
    let id=this._rout.snapshot.params.id
     if(this.todoeditform.valid){
       this._global.edittodo(id,this.todoeditform.value).subscribe(data=>{
         console.log(data)
       },
       ()=>{},
       ()=>{this._router.navigateByUrl('todo/mytodos')}
       )
     }
     
 
       }

}
