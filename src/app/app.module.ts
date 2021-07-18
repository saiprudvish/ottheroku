import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MustwatchComponent } from './mustwatch/mustwatch.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NetflixComponent } from './netflix/netflix.component';
import { PrimeComponent } from './prime/prime.component';
import { AhaComponent } from './aha/aha.component';
import { HotstarComponent } from './hotstar/hotstar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MovieratingComponent } from './movierating/movierating.component';
import { RatingprimeComponent } from './ratingprime/ratingprime.component';
import { RatingahaComponent } from './ratingaha/ratingaha.component';
import { RatingnetflixComponent } from './ratingnetflix/ratingnetflix.component';
import { RatingHotstarComponent } from './rating-hotstar/rating-hotstar.component';
import { OttahaComponent } from './ottaha/ottaha.component';
import { OttnetflixComponent } from './ottnetflix/ottnetflix.component';
import { OttprimeComponent } from './ottprime/ottprime.component';
import { OtthotstarComponent } from './otthotstar/otthotstar.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { OtttopmoviesComponent } from './otttopmovies/otttopmovies.component';
import { TopratingComponent } from './toprating/toprating.component';
import { OttshowsComponent } from './ottshows/ottshows.component';
import { ShowsratingComponent } from './showsrating/showsrating.component';
import { SearchPipe } from './search.pipe';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthorizationService } from './authorization.service';
import { UsercartComponent } from './usercart/usercart.component';
import { SharedModule } from './shared/shared.module';
import { WatchedComponent } from './watched/watched.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MustwatchComponent,
    UpcommingComponent,
    WatchlistComponent,
    NetflixComponent,
    PrimeComponent,
    AhaComponent,
    HotstarComponent,
    ProductdetailsComponent,
    MovieratingComponent,
    RatingprimeComponent,
    RatingahaComponent,
    RatingnetflixComponent,
    RatingHotstarComponent,
    OttahaComponent,
    OttnetflixComponent,
    OttprimeComponent,
    OtthotstarComponent,
    TopmoviesComponent,
    TvshowsComponent,
    OtttopmoviesComponent,
    TopratingComponent,
    OttshowsComponent,
    ShowsratingComponent,
    SearchPipe,
    ProfileComponent,
    UsercartComponent,
    WatchedComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [{ 
     provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationService,
     multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
