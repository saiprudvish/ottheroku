import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ottshows',
  templateUrl: './ottshows.component.html',
  styleUrls: ['./ottshows.component.css']
})
export class OttshowsComponent implements OnInit {

  @Input() productObj;
  constructor(private router:Router) { }
  onSelectImage(id){
    this.router.navigateByUrl('shows/'+id)
  }

  ngOnInit(): void {
  }

}
