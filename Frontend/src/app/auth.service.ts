import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupModel } from './signup/signup.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address : string = '/api';
  // server_address : string = 'http://localhost:3666/api';
  

  constructor(private http:HttpClient) { }

  Addtrainer(user: SignupModel){
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/user/trainersignup`,{"trainer":user})
    .subscribe((data) => {
      console.log(data);
    });
  }

  loginuser(loginuser: SignupModel){
    console.log('in service');
    return this.http.post<any>(`${this.server_address}/user/login`,{"logtrainer":loginuser})
  }

  // admin Add Trainer

  // AddtrainerDetails(tdetails : TrainerDetails){
  //   console.log('in service');
  //   return this.http.post<any>(`${this.server_address}/user/trainerdetailsadd`,{"trainer":tdetails})
  //   .subscribe((data) => {
  //     console.log(data);
  //   });

  // }
}
