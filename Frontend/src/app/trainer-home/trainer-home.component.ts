import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-home',
  templateUrl: './trainer-home.component.html',
  styleUrls: ['./trainer-home.component.css']
})
export class TrainerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let username1 = localStorage.getItem("name");
    console.log(username1);
  }

  username = localStorage.getItem("name");

}
