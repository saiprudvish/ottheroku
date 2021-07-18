import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userObj;

  count=0;
  count1=0;
  constructor(private hc:HttpClient,private userService:UserService) { }

  ngOnInit(): void {
      //get user data from local storage
      this.userObj= JSON.parse(localStorage.getItem("userObj"))
      //get userCartObj from API
      this.userService.getWatchs(this.userObj.username).subscribe(
        res=>{
          if(res.message==='watchlist-empty'){
            this.count=0;
          }
          else{
            this.userService.updateDataObservable(res.message)
          }
          this.userService.dataObservable.subscribe(prodObj=>{
             if(prodObj==0){
                 this.count=0;
             }
             else{
               this.count=prodObj.products.length;
             }
          })
        }
      )
       //get user data from local storage
       this.userObj= JSON.parse(localStorage.getItem("userObj"))
       //get userCartObj from API
       this.userService.getProductsFromUserCart(this.userObj.username).subscribe(
         res=>{
           if(res.message==='watchlist-empty'){
             this.count1=0;
           }
           else{
             this.userService.updateDataObservable(res.message)
           }
           this.userService.dataObservable.subscribe(prodObj=>{
              if(prodObj==0){
                  this.count1=0;
              }
              else{
                this.count1=prodObj.products.length;
              }
           })
         }
       )
  }

}
