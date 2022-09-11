import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';
import { TrainertimesheetModel } from './trainertimesheet.model';


@Component({
  selector: 'app-trainer-add-timesheet',
  templateUrl: './trainer-add-timesheet.component.html',
  styleUrls: ['./trainer-add-timesheet.component.css']
})
export class TrainerAddTimesheetComponent implements OnInit {

  changeButton:boolean=false;

  activityList: any = [];
  ProgramList: any = [];
  TrainingMod_List: any= [];
  
  reloadCurrentPage() {
    window.location.reload();
   }

  constructor(private trainer_service : TrainerService) { }

  toggleButton(): void{
    this.changeButton= !this.changeButton;
    }

   
    ts_insert =new TrainertimesheetModel('','','','','',0,0,1);
    ts_view:any=[];

  ngOnInit(): void {

    this.trainer_service.gettimesheet()
    .subscribe({
      next: (data)=>{
    this.ts_view=JSON.parse(JSON.stringify(data));   
    
  },
      error: (err)=> {
        console.log(err);
      }
  })
  




    // fetching program name and date
    this.trainer_service.getprograms()
    .subscribe({
      next: (data)=>{
        this.ProgramList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    });


// fetching activity type
    this.trainer_service.getactivity()
    .subscribe({
      next: (data)=>{
        this.activityList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    });


// fetching trainer Mode
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


  onSubmit() {
    if(this.changeButton) {
      this.saveUpdate()
    } else {
      this.addTimesheet()
    }
  }

  addTimesheet(){
    let username = localStorage.getItem("name")
     if(username){
      this.ts_insert.tsTrainerName=username
    }
  this.trainer_service.add_Timesheet(this.ts_insert);
      console.log("called");
      alert("success");
    }


    saveUpdate() {
      // this.trainer_service.updateTimesheet(this.ts_insert);
      // alert("Updated");
    }
    
 
}