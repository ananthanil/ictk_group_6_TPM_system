import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programtype',
  templateUrl: './programtype.component.html',
  styleUrls: ['./programtype.component.css']
})
export class ProgramtypeComponent implements OnInit {

  heading='';
  program=[{
    name:'',
    number:'',
    strtDate:'',
    endDate:''
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
