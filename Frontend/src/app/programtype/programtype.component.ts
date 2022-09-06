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
    
    showUp: boolean = false;
    constructor(private adminservice:AdminService, private router:Router) { }

    toggleUp(): void{
      this.showUp= !this.showUp;
    }


    program_insert =new ProgramModel('',0,'',1);
    program_view:any = [];
    
    reloadCurrentPage() {
      window.location.reload();
    }

    editProgram(editId: any)
    { 
      this.adminservice.getProgramsUpdate(editId)
      .subscribe((data)=>{
        console.log(data);
        this.program_insert  = JSON.parse(JSON.stringify(data));
        this.program_insert.date = this.program_insert.date.slice(0,10)
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
      if(this.showUp) {
        this.saveUpdate()
      } else {
        this.addProgram()
      }
    }

    addProgram()
    {
      this.adminservice.add_Program(this.program_insert);
      console.log("called");
      alert("success");
    }


    saveUpdate() {
      this.adminservice.updateProgram(this.program_insert);
      alert("Updated");
    }
    
    deleteProgram(id: any){

      let confirmed = confirm('Are you sure to delete');
      console.log(confirmed);

      if(confirmed) {
        this.adminservice.removeProgram(id);
      }
      
    }
  }

  