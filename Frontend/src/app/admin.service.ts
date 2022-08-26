import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from './t-type/category.model';
import { ProgramModel } from './programtype/program.model';

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


                  // <-------- Program details----------->
  addProgram(ptype: ProgramModel)
  {
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/admin/insertprogram`,{"program_data":ptype})
    .subscribe((data) => {
      console.log(data);
    });
  }
  getprograms(){
    return this.http.get<any>(`${this.server_address}/admin/programview`);
  }

  getProgramsUpdate(id:any){
    return this.http.get<any>(`${this.server_address}/admin/`+id);
  }

  updateProgram(Programid:any){
    return this.http.put<any>(`${this.server_address}/admin/ProgramUpdate/`,Programid)
    .subscribe(data => {console.log(data)})
  }

  removeProgram(Programid:any){
    return this.http.put<any>(`${this.server_address}/admin/ProgramRemove/`,Programid)
    .subscribe(data => {console.log(data)})
  }

}


