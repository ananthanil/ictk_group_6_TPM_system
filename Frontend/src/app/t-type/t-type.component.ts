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

  category = new CategoryModel('',1);

  ngOnInit(): void {
  }
  AddtrainerCategory()
  {
    this.adminservice.addTrainerCategory(this.category);
    console.log("called");
    alert("success");
    // this.router.navigate(['admin-home']);
  }
}
