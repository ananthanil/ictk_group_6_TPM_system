import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { TrainerDetails } from './trainerdetails.model'

@Component({
  selector: 'app-t-details',
  templateUrl: './t-details.component.html',
  styleUrls: ['./t-details.component.css']
})
export class TDetailsComponent implements OnInit {
  showImage:boolean = false;
 constructor(private adminservice:AdminService) { }
 
 toggleImage():void{
  this.showImage = !this.showImage
}
 adminaddtrainer_insert = new TrainerDetails('','','',0,'','','trainer',1);
 adminaddtrainer_view: any=[];


 reloadCurrentPage() {
  window.location.reload();
 }
 editTrainerdetails(editId:any){
    this.adminservice.getTrainerDetailsUpdate(editId).subscribe((data)=>{
      this.adminaddtrainer_insert = JSON.parse(JSON.stringify(data));
    })
    console.log(editId)
  }
  ngOnInit(): void {
      this.adminservice.gettrainerDetails()
      .subscribe({
        next : (data)=>{
          this.adminaddtrainer_view = JSON.parse(JSON.stringify(data));
        },
        error : (err)=>{
          console.log(err);
        }
      })
    }
      onSubmit(){
        if(this.showImage) {
          this.saveUpdate()
        } else {
          this.AddTrainerDetails()
        }
      }
      AddTrainerDetails(){
        this.adminservice.addtrainerDetails(this.adminaddtrainer_insert);
        console.log("called");
        alert("sucess");
        }
        saveUpdate()
        {
          this.adminservice.updateTrainerDetails(this.adminaddtrainer_insert);
          alert("trainer details Updated");
        }

        deleteTrainerDetails()
        {
        this.adminservice.removeTrainerDetails(this.adminaddtrainer_insert);
        alert("deleted")
        }
  }

  

 
 

