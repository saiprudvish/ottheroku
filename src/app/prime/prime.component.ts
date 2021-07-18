import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {
  searchTerm:string;
  primeMovies;
  constructor(private pObj:FirstService) { }

  ngOnInit(): void {
    this.pObj.getNetflixMovies().subscribe(
      userData=>{
        //assign movies
        this.primeMovies=userData;

       
      },
      err=>{
        console.log("err in getting movies data",err)
      }

    ) 
  }
}
