import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-showsrating',
  templateUrl: './showsrating.component.html',
  styleUrls: ['./showsrating.component.css']
})
export class ShowsratingComponent implements OnInit {

  
  topObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService) { }


  ngOnInit(): void {
      //get id from url
      let id=this.ar.snapshot.params.id;
    
      //get data of movie with this current id
      this.fs.getShowsMovieRatingById(id).subscribe(
        obj=>{
    
          this.topObj=obj;
        },
        err=>{
          console.log("err in reading movie",err)
        }
      )
  }

}
