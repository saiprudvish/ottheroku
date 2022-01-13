import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.css']
})
export class NetflixComponent implements OnInit {

  NetflixMovies;
  searchTerm:string;
  constructor(private nObj:AdminService) { }

 first;
  
  ngOnInit() : void {
    // this.nObj.getNetflixMovies().subscribe(
    //   userData=>{
    //     //assign movies
    //     this.NetflixMovies=userData;

       
    //   },
    //   err=>{
    //     console.log("err in getting movies data",err)
    //   }

    // )
    
    this.nObj.getProducts().subscribe(
        userData=>{
          //assign movies
          this.NetflixMovies=userData;
        
          console.log(this.NetflixMovies)
           this.first=this.NetflixMovies[Object.keys(this.NetflixMovies)[0]]
           console.log(this.first)
         console.log(this.NetflixMovies[Object.keys(this.NetflixMovies)[0]])
         
        },
        err=>{
          console.log("err in getting movies data",err)
        }
    )
      }

}
