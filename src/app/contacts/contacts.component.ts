import { Component, OnInit } from '@angular/core';
import { ContactsService} from '../contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService:ContactsService) { }
  //const result : string[] = [];
  //const contactList : string[] = [];
  contactList =[];
  ngOnInit(): void {
  this.contactList = this.contactsService.getContacts(); //binding and getting data from the contact using metho getcontacts()
  }

}
