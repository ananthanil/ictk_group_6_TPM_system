import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainertimesheetModel } from './trainer-add-timesheet/trainertimesheet.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

    server_address : string = '/api';
    // server_address : string = 'http://localhost:3666/api';

  constructor(private http : HttpClient) { }


  getprograms(){
    return this.http.get<any[]>(`${this.server_address}/trainer/programview`);
  }

  getactivity(){
    return this.http.get<any[]>(`${this.server_address}/trainer/activityTypeview`);
  }

  gettrainerMode(){
    return this.http.get<any[]>(`${this.server_address}/trainer/TrainerModeview`);
  }



// trainer timesheet operations

  add_Timesheet(ts: TrainertimesheetModel){
    return this.http.post<any>(`${this.server_address}/trainer/inserttimesheet`,{"timesheet":ts})
    .subscribe((data) => {
      console.log(data);
    });
  }


  gettimesheet(){
    return this.http.get<any[]>(`${this.server_address}/trainer/time_sheetview`);
  }

}
