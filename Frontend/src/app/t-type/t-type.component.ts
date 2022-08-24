import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CategoryModel } from './category.model';
@Component({
  selector: 'app-t-type',
  templateUrl: './t-type.component.html',
  styleUrls: ['./t-type.component.css']
})
export class TTypeComponent implements OnInit {

  constructor(private adminservice:AdminService, private router:Router) { }

  category_insert = new CategoryModel('',1);
  category_view:any = new CategoryModel('',1);

  reloadCurrentPage() {
    window.location.reload();
   }

  ngOnInit(): void {
    
    // this.adminservice.getcategories().subscribe((data)=>{
    //   this.category_view=JSON.parse(JSON.stringify(data));
    // })
    this.adminservice.getcategories().subscribe(
      data=>{this.category_view=data}
    )
  }
  AddtrainerCategory()
  {
    this.adminservice.addTrainerCategory(this.category_insert);
    console.log("called");
    alert("success");
    // this.router.navigate(['admin-home']);
  }
}
