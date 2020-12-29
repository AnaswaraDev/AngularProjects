import { Component, OnInit } from '@angular/core';
import { ContactsService} from '../contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

 // constructor(private contactsService:ContactsService) { }

 constructor(public contactsService:ContactsService) { }
 msgTrue = false;
  contactList: any;
  ngOnInit(): void {
 
     this.contactsService.getContacts().subscribe(data =>{
      this.contactList = data;
    });
  }
 
  //this.contactList = this.contactsService.getContacts(); //binding and getting data from the contact using metho getcontacts()
  addNewContact(form :any) {
    // mocking the form data that we will get from form
   // const newFormData ={ id: 5 , firstName : "Raj" , lastName: "kumar" };


    //dynamic data from form
    console.log(form.value.id);
    console.log(form.value.firstName);
    console.log(form.value.lastName);
    const newFormData = {id:form.value.id , firstName :form.value.firstName , lastName: form.value.firstName };

    this.contactsService.createContact(newFormData).subscribe(data =>{
      console.log(data);
      this.msgTrue =true;
    });
  }
  


}
