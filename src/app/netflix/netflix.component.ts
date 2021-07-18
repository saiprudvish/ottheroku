import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.css']
})
export class NetflixComponent implements OnInit {

  NetflixMovies;
  searchTerm:string;
  constructor(private nObj:FirstService) { }
  
  ngOnInit() : void {
    this.nObj.getNetflixMovies().subscribe(
      userData=>{
        //assign movies
        this.NetflixMovies=userData;

       
      },
      err=>{
        console.log("err in getting movies data",err)
      }

    ) 
  }

}
