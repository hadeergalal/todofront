import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.css']
})
export class AlltodosComponent implements OnInit {
  alltodos: any[]= []
  constructor( public _global:GlobalService) { }

  ngOnInit(): void {
    this.getmytodos()
  }
  getmytodos(){
    this._global.alltodos().subscribe(data=>
      { this. alltodos=data})
      }
     

}
