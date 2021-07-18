import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ottaha',
  templateUrl: './ottaha.component.html',
  styleUrls: ['./ottaha.component.css']
})
export class OttahaComponent implements OnInit {

  @Input() productObj;
  constructor(private router:Router) { }
  onSelectImage(id){
    this.router.navigateByUrl('aha/'+id)
  }

  ngOnInit(): void {
  }

}
