import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent implements OnInit {

  userCartObj;
  products=[];
  
  constructor(private userService:UserService,private router:Router) { }
userObj;
count;

  onSelectImage(id){
    this.router.navigateByUrl('home/'+id)
  }

  ngOnInit(): void {
    let username=localStorage.getItem("username")
    this.userService.getWatchs(username).subscribe(
      res=>{

       
        if(res["message"]==='Watched-empty'){
        
          alert("User watchedlist is empty")
        }
        else{
            this.userCartObj=res["message"]
          
            
          
        }
      },
      err=>{
        console.log("err in reading cart",err)
        alert("Something went wrong in fetching cart items..")
      }
    )
  }

}
