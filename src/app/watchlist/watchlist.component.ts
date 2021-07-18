import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirstService } from '../first.service';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  userCartObj;
  products=[];
  userObj;
  constructor(private us:UserService,private router:Router) { }

  onSelectImage(id){
    this.router.navigateByUrl('home/'+id)
  }

  ngOnInit(): void {
      
    let username=localStorage.getItem("username")
    this.us.getProductsFromUserCart(username).subscribe(
      res=>{

       
        if(res["message"]==='Watchlist-empty'){
        
          alert("User watchlist is empty")
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