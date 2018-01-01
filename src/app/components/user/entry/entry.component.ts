import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import { User } from "../user.model"
import { UserentryService } from "./userentry.service"


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class UserEntryComponent implements OnInit {


  form: FormGroup;
  _location: Location;

  @Input() user:User;

  constructor(private formBuilder: FormBuilder, 
    private _service: UserentryService,
    private location: Location) {
      this._location = location;
       
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null],
      email: [null],
      role: [null]
    });

    this.user = new User();
  }
  

  onSubmit() {
    if (this.form.valid) {
     
     this.user.name = this.form.get('name').value;
     this.user.role = this.form.get('role').value;
     this.user.email = this.form.get('email').value;

      this._service.createUser(this.user);
      this._location.back();

    } else {
      // validate all form fields
    }
  }
  

}
