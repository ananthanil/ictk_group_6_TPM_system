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
    // myDate: Date = new Date();
    showUp: boolean = false;
    constructor(private adminservice:AdminService, private router:Router) { }

    toggleUp(): void{
      this.showUp= !this.showUp;
    }


    program_insert =new ProgramModel('',0,'',1);
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
      if(this.showUp) {
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
    // var x = prompt(`Type 'yes' to delete`)
    // if(x == 'yes') {
    //   this.adminservice.removeProgram(this.program_insert)
    //         if(response.success) {
    //           alert(`Deleted Successfully!`);
    //           this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
    //             this.router.navigate(['program_view']); //Workaround to reload the component
    //           });     
    //         } 
    //         else {
    //           alert(response.result);
    //         } 
    //       }
    
    //     };
      
    //   else {
    //       alert(`type 'yes'`);
    //     }
      
        }    
  
  