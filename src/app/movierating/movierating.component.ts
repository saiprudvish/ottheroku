import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-movierating',
  templateUrl: './movierating.component.html',
  styleUrls: ['./movierating.component.css']
})
export class MovieratingComponent implements OnInit {
  
  
  statu=true;
  status=true;
  
  MovieObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService,public userService:UserService) { 
 
}
    //create a custom event


  ngOnInit(): void {
      //get id from url
      let id=this.ar.snapshot.params.id;
    
      //get data of movie with this current id
      this.fs.getMovieRatingById(id).subscribe(
        obj=>{
    
          this.MovieObj=obj;
          console.log("obj is ",this.MovieObj)
        },
        err=>{
          console.log("err in reading movie",err)
        }
      )
  }

  //movie selected by user to add in watchlist
//product selected by user
onProductSelect(productObject){

  
     this.status=false;
  
  

   
  let username=localStorage.getItem("username")

  let newUserProductObj={username,productObject}

 this.userService.sendProductToUserCart(newUserProductObj).subscribe(
   res=>{
     alert(res['message'])
     this.userService.updateDataObservable(res.latestCartObj)
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

this.userService.sendWatchs(newUserProductObj).subscribe(
 res=>{
   alert(res['message'])
   this.userService.updateDataObservable(res.latestCartObj)
 },
 err=>{
   console.log("err in posting product to cart ",err)
   alert("Something wrong in adding product to cart...")
 }
)

}

  onProductDelete(productObject){
        //console.log(productObject)
        
      
      
        let username=localStorage.getItem("username")
        let newUserProductObj={username,productObject}
          //console.log(newUserProductObj)
          //product deleted by user
          this.userService.RemoveProductFromUserCart(newUserProductObj).subscribe(
            res=>{
             alert(res['message'])
             this.userService.updateDataObservable(res.latestCartObj)
          
            },
            err=>{
              console.log("err in posting product to cart ",err)
              alert("Something wrong in adding product to cart...")
            }
          )

}

}
