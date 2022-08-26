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

  
  constructor(private adminservice:AdminService, private router:Router) { }

  program_insert =new ProgramModel('',0,0,1);
  program_view:any = {}
  
  reloadCurrentPage() {
    window.location.reload();
   }
  
  ngOnInit(): void {

    this.adminservice.getprograms().subscribe((data:any)=>{
    this.program_view=JSON.parse(JSON.stringify(data));
  })
   }
  addProgram()
  {
    this.adminservice.addProgram(this.program_insert);
    console.log("called");
    alert("success");
    // this.router.navigate(['admin-home']);
  }
  deleteProgram(){

  }
}
