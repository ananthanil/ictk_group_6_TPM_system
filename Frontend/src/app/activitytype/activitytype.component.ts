import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { activityTypeModel } from './activityType.model';
@Component({
  selector: 'app-t-type',
  templateUrl: './activityType.component.html',
  styleUrls: ['./activityType.component.css']
})
export class activityypeComponent implements OnInit {

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
  
  editCategory(editId: any)
  { 
    this.adminservice.getactivityTypeUpdate(editId).subscribe((data)=>{
      this.activityType_insert  = JSON.parse(JSON.stringify(data));
    })
  }

  ngOnInit(): void {
    
    this.adminservice.getcategories()
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
    this.adminservice.updateactivityType(this.activityType_insert);
    alert("activty type Updated");
  }
  
  deleteCategory(){
    this.adminservice.removeCategory(this.category_insert);
    alert("deleted")
  }
}
