import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-mytodos',
  templateUrl: './mytodos.component.html',
  styleUrls: ['./mytodos.component.css']
})
export class MytodosComponent implements OnInit {
  alltodos: any[]= []
  constructor(public _global:GlobalService) { }

  ngOnInit(): void {
    this.getmytodos()
  }
  getmytodos(){
    this._global.alltodos().subscribe(data=>
      { this. alltodos=data})
      }
      delTask(id:any, i:any){
        this._global.deletetodo(id).subscribe(
          data=>{},
          ()=>{},
          ()=>{
            this. alltodos.splice(i,1)
          }
        )
      }


}
