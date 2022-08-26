import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ProgramModel } from './program.model';

@Component({
  selector: 'app-programtype',
  templateUrl: './programtype.component.html',
  styleUrls: ['./programtype.component.css']
})
export class ProgramtypeComponent implements OnInit {

  showButton: boolean = false;
  constructor(private adminservice:AdminService, private router:Router) { }

  toggleButton(): void{
    this.showButton= !this.showButton;
  }


  program_insert =new ProgramModel('',0,0,1);
  program_view:any = {}
  
  reloadCurrentPage() {
    window.location.reload();
   }

   editProgram(editId: any)
  { 
    this.adminservice.getProgramsUpdate(editId).subscribe((data)=>{
      this.program_insert  = JSON.parse(JSON.stringify(data));
    })
  }
  
  ngOnInit(): void {

    this.adminservice.getprograms()
    .subscribe({
      next: (data)=>{
    this.program_view=JSON.parse(JSON.stringify(data));   
    
   },
      error: (err)=> {
        console.log(err);
      }
  })
  }

  onSubmit() {
    if(this.showButton) {
      this.saveUpdate()
    } else {
      this.addProgram()
    }
  }

  addProgram()
  {
    this.adminservice.addProgram(this.program_insert);
    console.log("called");
    alert("success");
    // this.router.navigate(['admin-home']);
  }


  saveUpdate() {
    this.adminservice.updateProgram(this.program_insert);
    alert("Updated");
  }
  
  deleteProgram(){
    this.adminservice.removeProgram(this.program_insert);
    alert("Are you sure to delete")
  }
  

  
}
