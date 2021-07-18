import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ottprime',
  templateUrl: './ottprime.component.html',
  styleUrls: ['./ottprime.component.css']
})
export class OttprimeComponent implements OnInit {

  @Input() productObj;
  constructor(private router:Router) { }
  onSelectImage(id){
    this.router.navigateByUrl('prime/'+id)
  }

  ngOnInit(): void {
  }

}
