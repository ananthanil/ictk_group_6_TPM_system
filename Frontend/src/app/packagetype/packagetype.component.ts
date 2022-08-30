import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { PackageModel } from './package.model';
// import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-packagetype',
  templateUrl: './packagetype.component.html',
  styleUrls: ['./packagetype.component.css']
})
export class PackagetypeComponent implements OnInit {

  // hello : String = '';
  // hai : String = '';
  // tata : String = '';
  CategoryList: any = []
  ActivityList: any = []
 

  // changeCat(e:any){
  //   this.hello = e.target.value;
  //   console.log(this.hello);
  // }
  // changeCate(e:any){
  //   console.log(e.target.value)
  //   this.hai = e.target.value;
  //   console.log(this.hai);
  // }
  // changeActivity(e:any){
  //   this.tata = e.target.value;
  //   console.log(this.tata);
  // }
  // hello: any;
  // hai:any

  // form = new FormGroup({
  //   Category: new FormControl('', Validators.required),
  //   Category1: new FormControl('', Validators.required),
  //   Activity: new FormControl('', Validators.required),
  //   Hour_Amount: new FormControl('', Validators.required),
  //   per_head_amount: new FormControl('', Validators.required),
  //   satus  : new FormControl(1, Validators.required),
  // });

  insert = new PackageModel('','','',0,0,1);


  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.getcategories()
    .subscribe({
      next: (data)=>{
        this.CategoryList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    });
    this.adminservice.getactivityType()
    .subscribe({
      next: (data)=>{
        this.ActivityList = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  AddPackage(){
    console.log(this.insert);
    this.adminservice.insertPackage(this.insert);
    console.log("called");
    alert("success");
  }
}
