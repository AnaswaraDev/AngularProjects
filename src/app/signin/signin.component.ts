import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  loginUser(signInForm : NgForm)
  {
    console.log(signInForm);
    console.log("email :  "+signInForm.value.emailAddress); //extract email here
    console.log("pass:  "+signInForm.value.passwordFeild);
    console.log("terms :  " +signInForm.value.termsFeild);
    console.log("radio:  "+signInForm.value.genderFeild);
    console.log("notes :  "+signInForm.value.notesFeild);
  }
}



  
