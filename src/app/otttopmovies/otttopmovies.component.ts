import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otttopmovies',
  templateUrl: './otttopmovies.component.html',
  styleUrls: ['./otttopmovies.component.css']
})
export class OtttopmoviesComponent implements OnInit {

  @Input() productObj;
  constructor(private router:Router) { }
  onSelectImage(id){
    this.router.navigateByUrl('movies/'+id)
  }

  ngOnInit(): void {
  }

}
