import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: any = {};

  constructor(private Auth : AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  singin() {
    this.Auth.loginuser(this.user)
    .subscribe({
      next: (data:any)=> {
        console.log('line22', data);
        if(data.length == 0) {
          alert("User not found");
        } else {
          if(data[0].Ustatus == 1)
          {
            console.log(data);
            console.log('in side status=1')
            if(data[0].Urole == 'admin') 
            {
              console.log("hello from admin if");
              this.router.navigate(['admin-home']);
            } 
            else if(data[0].Urole == 'finance')
            {
              console.log("hello from finance else if");
              this.router.navigate(['finance-home']);
            } 
            else 
            {
              console.log("hello from tainer else");
              this.router.navigate(['trainer-home']);
            }
            console.log(data);
          }else {
          alert("user is not active");
          }
        }
      }, 
      error: (err:any)=> {
        console.log("error");
      }
    });
  }
}
