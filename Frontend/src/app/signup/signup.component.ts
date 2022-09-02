import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignupModel } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private Auth: AuthService) { }

  insert = new SignupModel('','','',0,'','trainer',1);
  ngOnInit(): void {
  }

<<<<<<< HEAD
  // trainerSignup()
  // {
  //   this.Auth.signup(this.category_insert);
  //   console.log("called");
  //   alert("success");
  // }
=======
  signup()
  {
    this.Auth.Addtrainer(this.insert);
    console.log("called");
    alert("success");
  }
>>>>>>> 5620bfdb855cc6761795549d71137a09175de7e0
}
