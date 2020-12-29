import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private HttpClient: HttpClient) { }

  getContacts(){
   
    //headers
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

 // get the http get methiod working  for you
 // once you get it - in coming tutorials
    return this.HttpClient.get('http://localhost:3000/contacts');
    
  }

  createContact(createBody :any ) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    return this.HttpClient.post('http://localhost:3000/contacts', createBody,{headers: httpHeaders}); //create resourse-parameter
  }
  callingFromTemplate(){
    console.log('calling from template direcrtly');
  }
}
