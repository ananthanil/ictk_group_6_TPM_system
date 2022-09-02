import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AdminService } from '../admin.service'
import { TrainerDetails } from './trainerdetails.model'

@Component({
  selector: 'app-t-details',
  templateUrl: './t-details.component.html',
  styleUrls: ['./t-details.component.css']
})
export class TDetailsComponent implements OnInit {

 constructor(private adminservice:AdminService,private router:Router) { }

 trainerdetails_insert = new TrainerDetails('',1);
 trainerdetails_view: any=[];

 reloadCurrentPage() {
   window.location.reload();
  }
 editTrainerdetails(editId:any){
    this.adminservice.getTrainerDetailsUpdate(editId).subscribe((data)=>{
      this.trainerdetails_insert = JSON.parse(JSON.stringify(data));
    })
    console.log(editId)
  }
  ngOnInit(): void {

    this.adminservice.gettrainerMode()
    .subscribe({
      next: (data)=>{
        this.trainerdetails_view = JSON.parse(JSON.stringify(data));
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  AddtrainerDetails(){
    this.adminservice.addTrainerDetails(this.trainerdetails_insert);
    console.log("called");
    alert("sucess");
  }

  // saveUpdate()
  // {
  //   this.adminservice.updateTrainerDetails(this.trainerdetails_insert);
  //   alert("trainer details Updated");
  // }
//  deleteTrainerDetails()
//  {
//   this.adminservice.removeTrainerDetails(this.trainerdetails_insert);
//     alert("deleted")
//  }
}
