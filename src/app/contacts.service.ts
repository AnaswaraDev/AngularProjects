import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  getContacts(){
    //HTTP  calls here
    const contactList  = [
      {contactId : 1, contactName : 'anuniya'},
      {contactId : 1, contactName : 'Rohan'},
      {contactId : 1, contactName : 'niya'},
      {contactId : 1, contactName : 'niyah'}
    ];
    return  contactList;
  }
}
