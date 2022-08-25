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

  showImage: boolean = false;

  constructor(private adminservice:AdminService, private router:Router) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  category_insert = new CategoryModel('',1);
  category_view:any = [];
  category_update = new CategoryModel('',1);
  obj: any = {};

  reloadCurrentPage() {
    window.location.reload();
   }
  
  editCategory(editId: any)
  {
    
    this.adminservice.getCategoriesUpdate(editId).subscribe((data)=>{
      this.category_insert  = JSON.parse(JSON.stringify(data));
    })
    console.log(editId);
  }

  ngOnInit(): void {
    
    this.adminservice.getcategories()
    .subscribe({
      next: (data)=>{
        this.category_view = JSON.parse(JSON.stringify(data));
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  onSubmit() {
    if(this.showImage) {
      this.saveUpdate()
    } else {
      this. AddtrainerCategory()
    }
  }

  AddtrainerCategory()
  {
    this.adminservice.addTrainerCategory(this.category_insert);
    console.log("called");
    alert("success");
  }

  saveUpdate() {
    this.adminservice.updateCategory(this.category_insert);
    alert("Category Updated");
  }
}
