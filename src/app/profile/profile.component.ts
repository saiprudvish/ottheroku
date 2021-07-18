import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userObj;

  constructor(private hc:HttpClient) { }

  ngOnInit(): void {
  
     //get user data from local storage
     this.userObj= JSON.parse(localStorage.getItem("userObj"))
}
getPrivateData(){
  this.hc.get('/user/testing').subscribe(
    res=>{
      alert(res['message'])
    },
    err=>{
      console.log(err)
      alert(err.message)
    }
  )
 }
}
  


