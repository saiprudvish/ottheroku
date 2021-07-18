import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from './first.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'Angular';
  constructor(public us:UserService,private router:Router){}
  searchTerm:string;

   file:File;
   
   selectFile(event){
    this.file= event.target.files[0]
   console.log(this.file)
    
    }
    onSignup(userObj){

      //create FOrmData obj
      let formData=new FormData();
        //add file
       formData.append("photo",this.file,this.file.name)
      //add userObj
        formData.append("userObj",JSON.stringify(userObj))
      this.us.createUser(formData).subscribe(
        res=>{
          if(res.message==="User created"){
            alert("User created")
            //navigate to login component
          }
          else{
            alert(res.message)
          }
        },
        err=>{
          console.log(err)
          alert("Something went wrong in user creation")
        }
      )
      }

  userLogout(){
    localStorage.clear();
    this.us.userLoginStatus=false;
  }
}