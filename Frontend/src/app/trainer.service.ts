import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

    // server_address : string = 'api';
    server_address : string = 'http://localhost:3666/api';

  constructor(private http : HttpClient) { }
}
