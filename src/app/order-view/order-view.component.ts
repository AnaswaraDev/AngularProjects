import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
   
  paramQuery = '';
  constructor( private activatedRoute :ActivatedRoute) { //supporting lib,modules
  this.activatedRoute.params.subscribe(data => {
     this.paramQuery =data.id ;

  });
} 

  ngOnInit(): void {
  }

}
