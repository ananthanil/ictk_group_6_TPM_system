import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from './t-type/category.model';
import { TrainerMode } from './t-mode/trainermode.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // server_address : string = 'api';
  server_address : string = 'http://localhost:3666/api';
  
  constructor(private http:HttpClient) { }

  // Trainer Category operations
  addTrainerCategory(ttype: CategoryModel)
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/categoryadd`,{"category":ttype})
    .subscribe((data) => {
      console.log(data);
    });
  }

  getcategories(){
    return this.http.get<any[]>(`${this.server_address}/admin/categoryview`);
  }

  getCategoriesUpdate(id:any){
    return this.http.get<any>(`${this.server_address}/admin/`+id);
  }

  updateCategory(Categoryid:any){
    return this.http.put<any>(`${this.server_address}/admin/CategoryUpdate/`,Categoryid)
    .subscribe(data => {console.log(data)})
  }

  removeCategory(Categoryid:any){
    return this.http.put<any>(`${this.server_address}/admin/CategoryRemove/`,Categoryid)
    .subscribe(data => {console.log(data)})
  }


  //Trainer mode operationS
  addTrainerMode(tmode:TrainerMode )
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/trainermodeadd`,{"trMode":tmode})
    .subscribe((data) => {
      console.log(data);
    });
  }
  gettrainerMode(){
    return this.http.get<any[]>(`${this.server_address}/admin/TrainerModeview`);
  }
  getTrainerModeUpdate(id:any){
    return this.http.get<any>(`${this.server_address}/admin/`+id);
  }

  updateTrainerMode(Tmodeid:any){
    return this.http.put<any>(`${this.server_address}/admin/TrainermodeUpdate/`,Tmodeid)
    .subscribe(data => {console.log(data)})
  }

  removeTrainerMode(Tmodeid:any){
    return this.http.put<any>(`${this.server_address}/admin/TrainermodeRemove/`,Tmodeid)
    .subscribe(data => {console.log(data)})
  }
  }
  
