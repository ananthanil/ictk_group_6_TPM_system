import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { TrainerMode } from './trainermode.model';


@Component({
  selector: 'app-t-mode',
  templateUrl: './t-mode.component.html',
  styleUrls: ['./t-mode.component.css']
})
export class TModeComponent implements OnInit {

  showImage:boolean = false;
  constructor(private adminservice:AdminService,private router:Router){}
 
  
  toggleImage():void{
    this.showImage = !this.showImage
  }
  trainermode_insert = new TrainerMode('',1);
  trainermode_view: any=[];

  reloadCurrentPage() {
    window.location.reload();
   }
  
  editTrainermode(editId:any){
    this.adminservice.getTrainerModeUpdate(editId).subscribe((data)=>{
      this.trainermode_insert = JSON.parse(JSON.stringify(data));
    })
    console.log(editId)
  }
  ngOnInit(): void {
    
    this.adminservice.gettrainerMode()
    .subscribe({
      next: (data)=>{
        this.trainermode_view = JSON.parse(JSON.stringify(data));
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

   onSubmit(){
    if(this.showImage) {
      this.saveUpdate()
    } else {
      this.AddtrainerMode()
    }
  }

  AddtrainerMode(){
    this.adminservice.addTrainerMode(this.trainermode_insert);
    console.log("called");
    alert("sucess");
  }

  saveUpdate(){
    this.adminservice.updateTrainerMode(this.trainermode_insert);
    alert("trainer mode Updated");
  }

  deleteTrainerMode(){
    this.adminservice.removeTrainerMode(this.trainermode_insert);
    alert("deleted")
  }
}


