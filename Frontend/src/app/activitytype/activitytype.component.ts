import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ActivityTypeModel } from './activityType.model';
@Component({
  selector: 'app-t-type',
  templateUrl: './activitytype.component.html',
  styleUrls: ['./activityType.component.css']
})
export class ActivitytypeComponent implements OnInit {

  showImage: boolean = false;

  constructor(private adminservice:AdminService, private router:Router) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  activity_insert = new ActivityTypeModel('',1);
  activity_view:any = [];

  reloadCurrentPage() {
    window.location.reload();
   }
  
   editactivityType(editId: any)
  { 
    console.log("in edit activity view");
    this.adminservice.getactivitiesUpdate(editId).subscribe((data)=>{
      this.activity_insert  = JSON.parse(JSON.stringify(data));
   })
   console.log("end of the activity view");
   }

  ngOnInit(): void {
    
     this.adminservice.getactivity()
    .subscribe({
       next: (data)=>{
         this.activity_view = JSON.parse(JSON.stringify(data));
       },
       error: (err)=> {
        console.log(err);
       }
      })
  }

  onSubmit() {
    if(this.showImage) {
    this.saveUpdate()
    } else {
      this.AddactivityType()
    }
  }

  AddactivityType()
  {
   
    this.adminservice.addactivity(this.activity_insert);
    console.log("called");
    alert("Added");
  }

   saveUpdate() {
    alert("update called")
    this.adminservice.updateactivity(this.activity_insert);
      alert("activty type Updated");
   }
  
   deleteactivityType(){
    alert("component.ts called");
    this.adminservice.removeactivity(this.activity_insert);
   }
}
