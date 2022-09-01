import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-trainer-add-timesheet',
  templateUrl: './trainer-add-timesheet.component.html',
  styleUrls: ['./trainer-add-timesheet.component.css']
})
export class TrainerAddTimesheetComponent implements OnInit {

  constructor(private trainer_service : TrainerService,private admin_service : AdminService) { }
  ActivityList: any = []
  ProgramList: any = []

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
    
    this.admin_service.getactivityType()
    .subscribe({
      next: (data)=>{
        this.ActivityList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    });
  }

}
