import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { TrainerMode } from './trainer-mode';

@Component({
  selector: 'app-t-mode',
  templateUrl: './t-mode.component.html',
  styleUrls: ['./t-mode.component.css']
})
export class TModeComponent implements OnInit {
  constructor(private adminservice:AdminService,private router:Router){}
  
  trainermode_insert = new TrainerMode('',1);
  trainermode_view = new TrainerMode('',1);

  reloadCurrentPage() {
    window.location.reload();
   }

  ngOnInit(): void {
    this.adminservice.gettrainermode().subscribe((data:any)=>{
      this.trainermode_view=JSON.parse(JSON.stringify(data));
    })
   
  }
  AddtrainerMode(){
    this.adminservice.addTrainerMode(this.trainermode_insert);
    console.log("called");
    alert("sucess");
  }
}
