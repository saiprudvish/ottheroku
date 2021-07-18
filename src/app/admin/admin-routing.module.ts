import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductsComponent } from '../viewproducts/viewproducts.component'
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin.component';

const routes: Routes =  [{ path: '', component: AdminComponent ,children:[
  {path:"add-product",component:AddProductComponent},
  {path:"view-products",component:ViewproductsComponent},
  {path:'',redirectTo:"add-product",pathMatch:"full"}
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
