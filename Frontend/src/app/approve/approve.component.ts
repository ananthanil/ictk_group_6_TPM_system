import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { TrainertimesheetModel } from '../trainer-add-timesheet/trainertimesheet.model';
  
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  ApproveList: any = [];
  
  constructor(private adminservice:AdminService, private router:Router) {   

  }
  title:String="Approve TimeSheet";
  ngOnInit(): void {


  // fetching Timesheet
  this.adminservice.gettimesheet()
  .subscribe({
    next: (data)=>{
      this.ApproveList = JSON.parse(JSON.stringify(data));
     
    },
    error: (err)=> {
      console.log(err);
    }
  });


  }

}
