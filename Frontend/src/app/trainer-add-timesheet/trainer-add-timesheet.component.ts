import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-trainer-add-timesheet',
  templateUrl: './trainer-add-timesheet.component.html',
  styleUrls: ['./trainer-add-timesheet.component.css']
})
export class TrainerAddTimesheetComponent implements OnInit {
  ActivityList: any = [];
  ProgramList: any = [];
  TrainingMod_List: any= [];

  constructor(private trainer_service : TrainerService) { }


  ngOnInit(): void {
    // this.admin_service.packageView()
    // .subscribe({
    //   next: (data)=>{
    //     this.ProgramList = JSON.parse(JSON.stringify(data));
    //   },
    //   error: (err)=> {
    //     console.log(err);
    //   }
    // });
    
    this.trainer_service.getactivityType()
    .subscribe({
      next: (data)=>{
        this.ActivityList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    });

    this.trainer_service.gettrainerMode()
    .subscribe({
      next: (data)=>{
        this.TrainingMod_List = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    });
  }
}