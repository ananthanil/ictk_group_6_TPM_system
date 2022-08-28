import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-packagetype',
  templateUrl: './packagetype.component.html',
  styleUrls: ['./packagetype.component.css']
})
export class PackagetypeComponent implements OnInit {

  CategoryList: any = []
  ActivityList: any = []

  form = new FormGroup({
    Category: new FormControl('', Validators.required),
    Activity: new FormControl('', Validators.required)
  });
 
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
    console.log(this.form.value);
  }

}
