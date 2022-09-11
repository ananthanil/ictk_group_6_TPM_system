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

  insert = new SignupModel('','','',0,'','','trainer',0);
  ngOnInit(): void {
  }


  signup()
  {
    this.Auth.Addtrainer(this.insert);
    console.log("called");
    alert("success");
  }
}
