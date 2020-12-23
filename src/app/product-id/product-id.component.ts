import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
//import { NgModelModule}  from './ng-model/ng-model.module';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {

/*   queryParams = '' ;
 searchKeyword = '';
constructor( private router : Router,
             private activatedRouter : ActivatedRoute) { 
 this.activatedRouter.params.subscribe(data => {
   this.searchKeyword =data.id;
 });
} */

  ngOnInit(): void {
  }

}
