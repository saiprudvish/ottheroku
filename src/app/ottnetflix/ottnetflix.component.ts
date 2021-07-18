import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ottnetflix',
  templateUrl: './ottnetflix.component.html',
  styleUrls: ['./ottnetflix.component.css']
})
export class OttnetflixComponent implements OnInit {

  @Input() productObj;
  constructor(private router:Router) { }
  onSelectImage(id){
    this.router.navigateByUrl('netflix/'+id)
  }
  ngOnInit(): void {
  }

}
