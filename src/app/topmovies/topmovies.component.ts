import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.component.html',
  styleUrls: ['./topmovies.component.css']
})
export class TopmoviesComponent implements OnInit {

  TopMovies;
  constructor(private tObj:FirstService) { }

  ngOnInit(): void {
    this.tObj.getTopMovies().subscribe(
      userData=>{
        //assign movies
        this.TopMovies=userData;

       
      },
      err=>{
        console.log("err in getting movies data",err)
      }

    ) 
}
}
