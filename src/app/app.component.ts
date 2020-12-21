import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {
   title ='my-app1';

   
   hrefVal='http://google.com';
   updatedLink = 'oracle.com';

   showMsg =false;

   
 users = [
  { userId: 10, firstName: 'jenny'},
  { userId: 20, firstName: 'jonson'},
  { userId: 30, firstName: 'robin'},
  { userId: 56, firstName: 'sherry'},
  { userId: 50, firstName: 'manson'},
  { userId: 60, firstName: 'ketty'}
];
  
switchValue= 'three';
bgColor ='blue';
colorVal = 'green';

clsName = 'one';



  }

   
  



   /*readfirstname(){
     console.log(this.firstname);
   } */







  

   //episode = '17'
   //subTitle = 'learn interpolation'
  // firstname ='';
  

 
  