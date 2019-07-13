import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WrapperService {

    baseUrl = 'localhost';

  constructor(
      private client: HttpClient,
      private headers: HttpHeaders) {
  }

  // authenticateUser(token) {
  //     //return this.client.get();
  // }
  //
  // getUserToken(id, password){
  //     //let token = this.client.get(this.baseUrl)
  //     //this.authenticateUser(token);
  // }


}
