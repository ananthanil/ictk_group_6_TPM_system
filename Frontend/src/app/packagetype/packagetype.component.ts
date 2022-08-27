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

  form = new FormGroup({
    Category: new FormControl('', Validators.required)
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
    })
    console.log(this.CategoryList)
  }

}
