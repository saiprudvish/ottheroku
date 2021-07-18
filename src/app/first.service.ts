import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private  hc:HttpClient) { }
  getTrendMovies():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/trendingmovies')
  }
  getMovieRatingById(id):Observable<any>{
    return this.hc.get<any>('http://localhost:3000/trendingmovies/'+id)
 }
 getHotstarMovies():Observable<any>{
  return this.hc.get<any>('http://localhost:3000/hotstar/')
}
getHotstarMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('http://localhost:3000/hotstar/'+id)
}
getNetflixMovies():Observable<any>{
  return this.hc.get<any>('http://localhost:3000/netflix/')
}
getAhaMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('http://localhost:3000/aha/'+id)
}
getPrimeMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('http://localhost:3000/amazonprime/'+id)
}
getNetflixMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('http://localhost:3000/netflix/'+id)
}
getPrimeMovies():Observable<any>{
  return this.hc.get<any>('http://localhost:3000/amazonprime/')
}
getAhaMovies():Observable<any>{
  return this.hc.get<any>('http://localhost:3000/aha/')
}
getTopShows():Observable<any>{
  return this.hc.get<any>('http://localhost:3000/topshows/')
}
getShowsMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('http://localhost:3000/topshows/'+id)
}
getTopMovies():Observable<any>{
  return this.hc.get<any>('http://localhost:3000/topmovies/')
}
getTopMovieRatingById(id):Observable<any>{
  return this.hc.get<any>('http://localhost:3000/topmovies/'+id)
}
//  //to check login status
//  userLoginStatus():boolean{
//   if(localStorage.getItem("username")==null){
//     return false;
//   }
//   else{
//     return true;
//   }
// }

// //logout
// userLogout(){
//   localStorage.clear();
// }
 }
