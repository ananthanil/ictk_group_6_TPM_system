import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { activityTypeModel } from './activityType.model';
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

  activityType_insert = new activityTypeModel('',1);
  activityType_view:any = [];

  reloadCurrentPage() {
    window.location.reload();
   }
  
   editactivityType(editId: any)
  { 
    console.log("in edit activity view");
    this.adminservice.getactivityTypeUpdate(editId).subscribe((data)=>{
      this.activityType_insert  = JSON.parse(JSON.stringify(data));
   })
   console.log("end of the activity view");
   }

  ngOnInit(): void {
    
     this.adminservice.getactivityType()
    .subscribe({
       next: (data)=>{
         this.activityType_view = JSON.parse(JSON.stringify(data));
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
   
    this.adminservice.addactivityType(this.activityType_insert);
    console.log("called");
    alert("Added");
  }

   saveUpdate() {
    alert("update called")
    this.adminservice.updateactivityType(this.activityType_insert);
      alert("activty type Updated");
   }
  
   deleteactivityType(){
    alert("component.ts called");
    this.adminservice.removeactivityType(this.activityType_insert);
   }
}
