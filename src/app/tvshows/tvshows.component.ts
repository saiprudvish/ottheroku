import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  TopShows;
  constructor(private tObj:FirstService) { }

  ngOnInit(): void {
    this.tObj.getTopShows().subscribe(
      userData=>{
        //assign movies
        this.TopShows=userData;
        console.log(this.TopShows)

       
      },
      err=>{
        console.log("err in getting movies data",err)
      }

    ) 
}
}
