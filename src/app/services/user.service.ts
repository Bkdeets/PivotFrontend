import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private baseUrl = 'http://localhost:4200/auth/';
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'ok',
    });

  constructor(
      private client: HttpClient) {
  }

  // getUserToken(username, password){
  //     headers['username'] = username;
  //     headers['password'] = password;
  //     try {
  //       return this.client.get(this.baseUrl, {headers: this.headers})['token'];
  //     }
  //     catch(e) {
  //       console.log(e);
  //       return null;
  //     }
  // }
}
