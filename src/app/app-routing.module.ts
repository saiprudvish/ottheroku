import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhaComponent } from './aha/aha.component';
import { HomeComponent } from './home/home.component';
import { HotstarComponent } from './hotstar/hotstar.component';
import { LoginComponent } from './login/login.component';
import { MovieratingComponent } from './movierating/movierating.component';
import { MustwatchComponent } from './mustwatch/mustwatch.component';
import { NetflixComponent } from './netflix/netflix.component';
import { PrimeComponent } from './prime/prime.component';
import { ProfileComponent } from './profile/profile.component';
import { RatingHotstarComponent } from './rating-hotstar/rating-hotstar.component';
import { RatingahaComponent } from './ratingaha/ratingaha.component';
import { RatingnetflixComponent } from './ratingnetflix/ratingnetflix.component';
import { RatingprimeComponent } from './ratingprime/ratingprime.component';
import { ShowsratingComponent } from './showsrating/showsrating.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { TopratingComponent } from './toprating/toprating.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { WatchedComponent } from './watched/watched.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes =  [{path:'home',component:HomeComponent},{path:'watch',component:MustwatchComponent,children:[
  {path:'movies',component:TopmoviesComponent},

  {path:'shows',component:TvshowsComponent},
  {path:'',redirectTo:"/watch/movies",pathMatch:"full"}
]},
{path:'upcomming',component:UpcommingComponent},

{path:'movies/:id',component:TopratingComponent},
{path:'shows/:id',component:ShowsratingComponent},
{path:'profiled',component:UserprofileComponent,children:[
  {path:"watched",component:WatchedComponent},
  {path:"watchlist",component:WatchlistComponent},
  {path:'',redirectTo:"/profiled/watched",pathMatch:"full"}
  
]},
{path:'profile',component:ProfileComponent,children:[
  {path:"view-products",component:ViewproductsComponent},
  {path:"view-cart",component:UsercartComponent},
  {path:'',redirectTo:"/profile/view-products",pathMatch:"full"}
]},
{path:'login',component:LoginComponent},
{path:'', redirectTo:'/login',pathMatch:'full'},
{path:'prime',component:PrimeComponent},
{path:'prime/:id',component:RatingprimeComponent},
{path:'netflix',component:NetflixComponent},
{path:'netflix/:id',component:RatingnetflixComponent},
{path:'aha',component:AhaComponent},
{path:'aha/:id',component:RatingahaComponent},
{path:'hotstar',component:HotstarComponent},
{path:'hotstar/:id',component:RatingHotstarComponent},
{path:'home/:id', component:MovieratingComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];;

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
