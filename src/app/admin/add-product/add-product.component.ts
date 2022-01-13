import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

 

  file:File;

  selectFile(event){
     this.file= event.target.files[0]
    console.log(this.file)
  }



  onAddProduct(prodObj){

    console.log("prodobj",prodObj)
    //create FOrmData obj
    let formData=new FormData();
    //add file
    formData.append("photo",this.file,this.file.name)
    //add userObj
    formData.append("prodObj",JSON.stringify(prodObj))
    console.log(formData)

    this.adminService.addNewProduct(formData).subscribe(
      res=>{
          if(res.message=='New product added'){
            alert("New product added")
            //navigate to view products 
          }
          else{
            alert(res.message)
          }
      },
      err=>{
        console.log("err in adding proooooduct",err)
        alert("Something went wrong in adding product")
      }
    )
   
  }


}
