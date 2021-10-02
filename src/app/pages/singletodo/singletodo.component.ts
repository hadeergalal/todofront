import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-singletodo',
  templateUrl: './singletodo.component.html',
  styleUrls: ['./singletodo.component.css']
})
export class SingletodoComponent implements OnInit {
  mytodo:any = {}
  
  constructor( public _global:GlobalService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getmytodo()
  }
  getmytodo(){
    this._global.singletodo(this._route.snapshot.params.id).subscribe(data=>{
      this.mytodo=data
    console.log(data)
    })
  }

}
