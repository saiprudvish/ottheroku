import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-aha',
  templateUrl: './aha.component.html',
  styleUrls: ['./aha.component.css']
})
export class AhaComponent implements OnInit {

  ahaMovies;

  constructor(private aObj:FirstService) { }

  ngOnInit(): void {
    this.aObj.getNetflixMovies().subscribe(
      userData=>{
        //assign movies
        this.ahaMovies=userData;

       
      },
      err=>{
        console.log("err in getting movies data",err)
      }

    ) 
  }
}
