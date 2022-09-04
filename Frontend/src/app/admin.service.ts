import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from './t-type/category.model';
import { ProgramModel } from './programtype/program.model';
import { ActivityTypeModel } from './activitytype/activityType.model';
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


  
//Activity Type operations


addactivity(aType: ActivityTypeModel)
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/insertactivity`,{"activity_Type":aType})
    .subscribe((data) => {
      console.log(data);
    });
  }

  getactivity(){
     return this.http.get<any[]>(`${this.server_address}/admin/activityview`);
   }

  getactivitiesUpdate(id:any){
    console.log("inside admin service & update")
    return this.http.get<any>(`${this.server_address}/admin/activitydata/`+id);
   }

   updateactivity(activityid:any){
      return this.http.put<any>(`${this.server_address}/admin/activityUpdate/`,activityid)
     .subscribe(data => {console.log(data)})
   }

  removeactivity(activityid:any){
    console.log("admin service called");
    return this.http.put<any>(`${this.server_address}/admin/activityRemove/`,activityid)
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

  // Package operations

  insertPackage(tpackage:PackageModel){
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/addPackage`,{"package":tpackage})
    .subscribe((data) => {
      console.log(data);
    });
  }
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


// <-------- Program Type operations-----------

add_Program(ptype: ProgramModel){
  console.log('in service');
  return this.http.post<any>(`${this.server_address}/admin/insertprogram`,{"program_data":ptype})
  .subscribe((data) => {
    console.log(data);
  });
}


getprograms(){
  return this.http.get<any[]>(`${this.server_address}/admin/programview`);
}

getProgramsUpdate(id:any){
  return this.http.get<any>(`${this.server_address}/admin/programdata/`+id);
}

updateProgram(Programid:any){
  return this.http.put<any>(`${this.server_address}/admin/ProgramUpdate/`,Programid)
  .subscribe(data => {console.log(data)})
}

removeProgram(Programid:any){
  console.log(Programid);
  
  return this.http.put<any>(`${this.server_address}/admin/ProgramRemove/`, { 'Programid': Programid})
  .subscribe(data => {console.log(data)})
}

}
