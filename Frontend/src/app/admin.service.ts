import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from './t-type/category.model';
import { activityTypeModel } from './activitytype/activityType.model';
import { TrainerMode } from './t-mode/trainermode.model';

import { PackageModel } from './packagetype/package.model';

import { TrainerDetails } from './t-details/trainerdetails.model';

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
  }

  getactivityType(){
     return this.http.get<any[]>(`${this.server_address}/admin/activityTypeview`);
   }

  getactivityTypeUpdate(activityTypeid:any){
    console.log("in side in admin service & update")
    return this.http.get<any>(`${this.server_address}/admin/`+activityTypeid);
   }

   updateactivityType(activityTypeid:any){
      return this.http.put<any>(`${this.server_address}/admin/activityTypeUpdate/`,activityTypeid)
     .subscribe(data => {console.log(data)})
   }

  removeactivityType(activityType:any){
    console.log("admin service called");
    return this.http.put<any>(`${this.server_address}/admin/activityTypeRemove/`,activityType)
    .subscribe(data => {console.log(data)})
  }

  // Trainer mode operationS

  //-----------Trainer mode operations Start----------
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
    return this.http.get<any>(`${this.server_address}/admin/TrainermodeSelect/`+id);
  }

  updateTrainerMode(Tmodeid:any){
    return this.http.put<any>(`${this.server_address}/admin/TrainermodeUpdate/`,Tmodeid)
    .subscribe(data => {console.log(data)})
  }

  removeTrainerMode(Tmodeid:any){
    return this.http.put<any>(`${this.server_address}/admin/TrainermodeRemove/`,Tmodeid)
    .subscribe(data => {console.log(data)})
  }


// Trainer mode operations

  insertPackage(tpackage:PackageModel){
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/addPackage`,{"package":tpackage})
    .subscribe((data) => {
      console.log(data);
    });
  }

  //---------- tarining mode oprations end---------

  //-----------training Details operation start--------

  addTrainerDetails(tdetails:TrainerDetails)
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/trainerdetailsadd`,{"trDetails":tdetails})
    .subscribe((data) => {
      console.log(data);
    });
  }
 
  gettrainerDetals(){
    return this.http.get<any[]>(`${this.server_address}/admin/TrainerDetalsview`);
  }
  getTrainerDetailsUpdate(id:any)
  {
    return this.http.get<any>(`${this.server_address}/admin/TrainerdetailsSelect/`+id);
  }
  // updateTrainerDetails()
  // {
  //   return this.http.put<any>(`${this.server_address}/admin/TrainerdetailsUpdate/`,TDetails)
  //   .subscribe(data => {console.log(data)})
  // }
  // removeTrainerDetails(){
  //   return this.http.put<any>(`${this.server_address}/admin/TrainerdetalsRemove/`,Tmodeid)
  //   .subscribe(data => {console.log(data)})
  // }
  packageView(){
    return this.http.get<any[]>(`${this.server_address}/admin/packageview`); 
  }

  PackageUpdateView(id:any){
    return this.http.get<any>(`${this.server_address}/admin/packageselect/`+id)
  }

  updatePackage(packageid:any){
    return this.http.put<any>(`${this.server_address}/admin/PackageUpdate/`,packageid)
    .subscribe(data => {console.log(data)})
  }

  removePackage(packageid:any)
  {
    return this.http.put<any>(`${this.server_address}/admin/PackageRemove/`,packageid)
    .subscribe(data => {console.log(data)})
  }
}