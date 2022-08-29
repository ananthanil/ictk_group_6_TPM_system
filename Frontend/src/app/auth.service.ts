import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // server_address : string = 'api';
  server_address : string = 'http://localhost:3666/api';
  

  constructor() { }

  signup(){}
}
