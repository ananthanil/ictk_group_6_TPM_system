import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from './t-type/category.model';
import { TrainerMode } from './t-mode/trainer-mode';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // server_address : string = 'api';
  server_address : string = 'http://localhost:3666/api';
  
  constructor(private http:HttpClient) { }

  addTrainerCategory(ttype: CategoryModel)
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/add`,{"category":ttype})
    .subscribe((data) => {
      console.log(data);
    });
  }
   getcategories(){
    return this.http.get<any>(`${this.server_address}/admin/categoryview`);
  }

  //TRAINER MODE
  addTrainerMode(ttype:TrainerMode )
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/add`,{"trMode":ttype})
    .subscribe((data) => {
      console.log(data);
    });
  }
  gettrainermode(){
    return this.http.get<any>(`${this.server_address}/admin/trainermodeview`);
  }
 
}
