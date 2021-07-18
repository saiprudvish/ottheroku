import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ratingaha',
  templateUrl: './ratingaha.component.html',
  styleUrls: ['./ratingaha.component.css']
})
export class RatingahaComponent implements OnInit {

  ahaObj;
  status=true;
  statu=true;
  constructor(private ar:ActivatedRoute,private fs:FirstService,private us:UserService) { }


  ngOnInit(): void {
      //get id from url
      let id=this.ar.snapshot.params.id;
    
      //get data of movie with this current id
      this.fs.getAhaMovieRatingById(id).subscribe(
        obj=>{
    
          this.ahaObj=obj;
        },
        err=>{
          console.log("err in reading movie",err)
        }
      )
  }

  onProductSelect(productObject){

    this.status=false;
  
  
   
  let username=localStorage.getItem("username")
  
  let newUserProductObj={username,productObject}
  
  this.us.sendProductToUserCart(newUserProductObj).subscribe(
   res=>{
     alert(res['message'])
     this.us.updateDataObservable(res.latestCartObj)
   },
   err=>{
     console.log("err in posting product to cart ",err)
     alert("Something wrong in adding product to cart...")
   }
  )
  
  }
  
  onWatchSelect(productObject){
  
  // this.status=false;
  this.statu=false;
  
  
  let username=localStorage.getItem("username")
  
  let newUserProductObj={username,productObject}
  
  this.us.sendWatchs(newUserProductObj).subscribe(
  res=>{
   alert(res['message'])
   this.us.updateDataObservable(res.latestCartObj)
  },
  err=>{
   console.log("err in posting product to cart ",err)
   alert("Something wrong in adding product to cart...")
  }
  )
}
}