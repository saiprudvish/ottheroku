import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  searchTerm:string;
  mySubscription:Subscription;



  Trendmovies;
  products=[];
  constructor(private fs:FirstService,private router:Router,private as:AdminService) { }

  ngOnInit(): void {


    this.as.getProducts().subscribe(
      res=>{
        this.products=res.message;
      },
      err=>{
        console.log("err in reading products ",err)
        console.log("Something went wrong in reading products")
      }
    )
   
    this.mySubscription= this.fs.getTrendMovies().subscribe(
      userData=>{
        //assign movies
        this.Trendmovies=userData;
        console.log(this.Trendmovies)

       
      },
      err=>{
        console.log("err in getting movies data",err)
      }

    ) 
  }
  onSelectNetflix(){
    this.router.navigateByUrl('/netflix')
  }
  onWatch(){
    this.router.navigateByUrl('/watch')
  }
  onSelectHotstar(){
    this.router.navigateByUrl('/hotstar')
  }
  onSelectAha(){
    this.router.navigateByUrl('/aha')
  }
  onSelectPrime(){
    this.router.navigateByUrl('/prime')
  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }


  productsSentByChild=[];
  getProductDetailsFromChild(name){
    this.productsSentByChild.push(name)
    console.log(this.productsSentByChild)
  }
 
     
   }


