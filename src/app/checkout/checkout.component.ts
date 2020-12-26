import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup ; //same name as in the template
  constructor( private formbuilder :FormBuilder ) {
   
    this.checkoutForm = formbuilder.group({   //build the form using formbuilder
      emailAddr: new FormControl() , //in the form builder -creting a group of form elements
      Quantity: new FormControl() , ///this should be exactly same as your form
      terms: new FormControl() //we can also have it dynamic- will learn it i nxt tutoriak
    });
   }

  ngOnInit(): void {  }
    postdata(){
      console.log( this.checkoutForm); //capturing date
      console.log( this.checkoutForm.value);
     // console.log( 'entire form value' *this.checkoutForm.value);
    //  console.log( 'email address'*this.checkoutForm.value);
 
  }
}
