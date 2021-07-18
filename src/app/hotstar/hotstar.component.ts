import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-hotstar',
  templateUrl: './hotstar.component.html',
  styleUrls: ['./hotstar.component.css']
})
export class HotstarComponent implements OnInit {

  HotstarMovies;
  constructor(private hObj:FirstService) { }

  ngOnInit(): void {
    this.hObj.getHotstarMovies().subscribe(
      userData=>{
        //assign movies
        this.HotstarMovies=userData;

       
      },
      err=>{
        console.log("err in getting movies data",err)
      }

    ) 
  }
}
