import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class ProjectEntryComponent implements OnInit {

  projectname: FormControl;
  

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
      console.log("Form Submitted!");
      console.log(this.projectname.value);
  }

}
