import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus : any ;
 // data: Observable<any>;
 // data2: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  
// create an observable
 new Observable(observer => {
    setTimeout(() => {
      observer.next('In Progress');
    }, 2000);

    //business logic come here
    setTimeout(() => {
      observer.next('Processing');
    }, 5000);

      //business logic come here
      setTimeout(() => {
        observer.next('Completed');
      }, 8000);

      setTimeout(()=>{
        observer.error();
      },8000);
    

  //how to complete the observable
      setTimeout(()=>{
        observer.complete(); //it no more listen or track changes
      },10000);

      setTimeout(() => {
        observer.next('After Completion'); //it will not show /process this data as we hav completed
      }, 12000);
    
  });


 // this.data.subscribe(val =>{
  //  this.orderStatus=val; //first subscription

 // });
  
 // this.data.subscribe(val2=> {
   //   console.log('second subscription');///second subscription
   //  });
}
}
