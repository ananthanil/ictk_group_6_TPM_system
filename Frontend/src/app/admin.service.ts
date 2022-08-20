import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from './t-type/category.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // server_address : string = 'api';
  server_address : string = 'http://localhost:3666';
  
  constructor(private http:HttpClient) { }

  addTrainerCategory(ttype: CategoryModel)
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/add`,{"category":ttype})
    .subscribe((data) => {
      console.log(data);
    });
  }
}
