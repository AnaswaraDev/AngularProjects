import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Querycountry='';
  Querytag='';
  Querytrending='';
  constructor(private activatedRoute: ActivatedRoute) { 
   this.activatedRoute.queryParams.subscribe(data => {
    this.Querycountry =data.country ;
    this.Querytag =data.tag;
    this.Querytrending =data.trending ;
   } );
  
  }
  ngOnInit(): void {
  }
}