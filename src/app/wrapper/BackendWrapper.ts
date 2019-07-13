import { HttpClient, HttpHeaders } from '@angular/common/http';

export class BackendWrapper {

    baseUrl = 'localhost';

  constructor(
      private client: HttpClient,
      private headers: HttpHeaders) {
  }

  // getUserToken(id, password){
  //     let token = this.client.get(this.baseUrl)
  //     authenticateUser(token);
  // }
  //
  // authenticateUser(token) {
  //     return this.client.get();
  // }
}
