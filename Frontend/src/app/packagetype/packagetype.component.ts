import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { PackageModel } from './package.model';

@Component({
  selector: 'app-packagetype',
  templateUrl: './packagetype.component.html',
  styleUrls: ['./packagetype.component.css']
})
export class PackagetypeComponent implements OnInit {
  
  changebutton: boolean = false;
  CategoryList: any = []
  ActivityList: any = []
  PackageList: any = []
  tainerList: any = []
  insert = new PackageModel('','','',0,0,1);


  constructor(private adminservice:AdminService) { }

  makechanges(): void{
    this.changebutton = !this.changebutton;
  }

  reloadCurrentPage() {
    window.location.reload();
   }

   editview(editId:any){
    this.adminservice.PackageUpdateView(editId).subscribe((data)=>{
      this.insert = JSON.parse(JSON.stringify(data));
      console.log(editId)
    })
   }

  ngOnInit(): void {
    // this.auth.getactivityType()
    // .subscribe({
    //   next: (data)=>{
    //     this.tainerList = JSON.parse(JSON.stringify(data));
    //   },
    //   error: (err)=> {
    //     console.log(err);
    //   }
    // });
    
    this.adminservice.getcategories()
    .subscribe({
      next: (data)=>{
        this.CategoryList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    });

    this.adminservice.getactivity()
    .subscribe({
      next: (data)=>{
        this.ActivityList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    });

    this.adminservice.packageView()
    .subscribe({
      next: (data)=>{
        this.PackageList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }
  onSubmit() {
    if(this.changebutton) {
      this.Updatepackage()
    } else {
      this.AddPackage()
    }
  }
  AddPackage(){
    this.adminservice.insertPackage(this.insert);
    console.log("called");
    alert("success");
  }
  Updatepackage(){
    this.adminservice.updatePackage(this.insert);
    alert("Category Updated");
  }
  deletePackage(){
    this.adminservice.removePackage(this.insert);
    alert("deleted")
  }
}
