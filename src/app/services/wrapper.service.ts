import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WrapperService {
    
  constructor(
      private client: HttpClient,
      private headers: HttpHeaders) {
  }

  getUserToken(id, password){
      let token = this.client.get(this.baseUrl)
      authenticateUser(token);
  }

  authenticateUser(token) {
      return this.client.get();
  }
}
