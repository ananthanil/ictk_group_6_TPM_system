import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from './t-type/category.model';
import { activityTypeModel } from './activitytype/activityType.model';

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

//======================================================================================
//===========================================================================================
//Activity Type operations

addactivityType(activityType: activityTypeModel)
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/addactivityType`,{"activityType":activityType})
    .subscribe((data) => {
      console.log(data);
    });
  }

  // getactivityType(){
  //    return this.http.get<any[]>(`${this.server_address}/admin/activityTypeview`);
  //  }

  // getactivityTypeUpdate(activityTypeid:any){
  //   return this.http.get<any>(`${this.server_address}/admin/`+activityTypeid);
  //  }

  //  updateactivityType(activityTypeid:any){
  //     return this.http.put<any>(`${this.server_address}/admin/activityTypeUpdate/`,activityTypeid)
  //    .subscribe(data => {console.log(data)})
  //  }

  // removeactivityType(activityType:any){
  //   console.log("admin service called");
  //   return this.http.put<any>(`${this.server_address}/admin/activityTypeRemove/`,activityType)
  //   .subscribe(data => {console.log(data)})
  // }








  }


