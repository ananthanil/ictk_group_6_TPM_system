import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-homepage',
  templateUrl: './finance-homepage.component.html',
  styleUrls: ['./finance-homepage.component.css']
})
export class FinanceHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let username = localStorage.getItem("name");
    console.log(username);
  }
  
}
