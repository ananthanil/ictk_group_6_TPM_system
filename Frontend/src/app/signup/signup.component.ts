import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private Auth: AuthService) { }

  ngOnInit(): void {
  }

  trainerSignup()
  {
    this.Auth.signup(this.category_insert);
    console.log("called");
    alert("success");
  }
}
