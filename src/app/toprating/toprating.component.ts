import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-toprating',
  templateUrl: './toprating.component.html',
  styleUrls: ['./toprating.component.css']
})
export class TopratingComponent implements OnInit {

  topObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService) { }


  ngOnInit(): void {
      //get id from url
      let id=this.ar.snapshot.params.id;
    
      //get data of movie with this current id
      this.fs.getTopMovieRatingById(id).subscribe(
        obj=>{
    
          this.topObj=obj;
        },
        err=>{
          console.log("err in reading movie",err)
        }
      )
  }

}
