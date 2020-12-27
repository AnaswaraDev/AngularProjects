import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup ; //same name as in the template
  constructor( private formbuilder :FormBuilder ) {
   
    /* this.checkoutForm = formbuilder.group({   //build the form using formbuilder
      emailAddr: new FormControl() , //in the form builder -creting a group of form elements
      Quantity: new FormControl() , ///this should be exactly same as your form
      terms: new FormControl() //we can also have it dynamic- will learn it i nxt tutoriak
    });  */

    this.checkoutForm = formbuilder.group({   //build the form using formbuilder
      emailAddr: [ '' ,[ Validators.minLength(5),
                     Validators.minLength(10), 
                    Validators.required ,
                    Validators.email] ],
      Quantity:  [ '' , Validators.required] ,
      terms:  [ '' , Validators.requiredTrue] 
    });

   }



  /* ngOnInit(): void {  
    this.checkoutForm.setValue({   //using set value we are setting entire form value
      emailAddr : 'rohan@gmail.com' ,
      Quantity :2 ,
      terms : true
    }); //we cannot omit or leave any value
  }  */

  ngOnInit(): void {  
    this.checkoutForm.patchValue({   //using  patchvalue we are setting individual form value
      emailAddr : 'rohan@gmail.com' ,
      Quantity :2 ,
      //terms : true
    }); //we can omit or leave any value
  } 
    postdata(){
      console.log( this.checkoutForm); //capturing date
      console.log( this.checkoutForm.value);//Give value of all form control of the form
      console.log( this.checkoutForm.value.emailAddr); //extract value of form control individually
      console.log( this.checkoutForm.value.Quantity);
      console.log( this.checkoutForm.value.terms);

     // console.log( 'entire form value' *this.checkoutForm.value);
    //  console.log( 'email address'*this.checkoutForm.value);
 
  }
}
