import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
file:any
  constructor(public _global:GlobalService) { }

  ngOnInit(): void {
  }
  onChangeFile(event:any){
    console.log(event.target.files)
    this.file=event.target.files[0]
  }
  upimg(){
    this._global.addPImg(this.file).subscribe(data=>{console.log(data)})
  }

}
