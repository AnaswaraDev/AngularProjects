import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup ; //same name as in the template
  //valueChangedTracked : '';

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
      terms:  [ '' , Validators.requiredTrue] ,
     /* items :this.formbuilder.array([ 
        this.formbuilder.group({
          itemId :['1'],
          itemName :['ARC'],
          itemDesc :['tutorial'],
          itemDone : [ '' ,Validators.requiredTrue  ]

        })
        ]) */
     
    });

  
  }
   ngOnInit(): void { 

     /*this.checkoutForm.get('emailAddr').valueChanges.subscribe(data=> {
        this.valueChangedTracked =data ;
       // console.log(data);
     }); */


     //the difference is- when ever  there is any change in the form control
     // form will omit the event
       this.checkoutForm.valueChanges.subscribe(data=>{
         console.log(data);
       
       }); 
       // 
       // learning to use status changes on Formcontrol

       /* this.checkoutForm.get('emailAddr')?.statusChanges.subscribe(data => {
            console.log(data);
       }); */
        //dynamically we can capture the state of validation of 'entire' form.

     this.checkoutForm.statusChanges.subscribe(fromState => {
            console.log(fromState);
      });  
        
     
     

   }

  
  /* ngOnInit(): void {  
    this.checkoutForm.setValue({   //using set value we are setting entire form value
      emailAddr : 'rohan@gmail.com' ,
      Quantity :2 ,
      terms : true
    }); //we cannot omit or leave any value
  }  */

 /* ngOnInit(): void {  
    this.checkoutForm.patchValue({   //using  patchvalue we are setting individual form value
      emailAddr : 'rohan@gmail.com' ,
      Quantity :2 ,
      //terms : true
    });  //we can omit or leave any value
  } */
    postdata(){
      console.log( this.checkoutForm); //capturing date
      console.log( this.checkoutForm.value);//Give value of all form control of the form
      console.log( this.checkoutForm.value.emailAddr); //extract value of form control individually
      console.log( this.checkoutForm.value.Quantity);
      console.log( this.checkoutForm.value.terms); 
 //this.resetForm();
     // console.log( 'entire form value' *this.checkoutForm.value);
    //  console.log( 'email address'*this.checkoutForm.value); 
 }  
  resetForm(){
    this.checkoutForm.reset(); //we will use reset method to reset the entire form in the one shot
 } 


}
