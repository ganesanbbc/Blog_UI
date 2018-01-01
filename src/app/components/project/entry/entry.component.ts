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

import { Project } from "../project.model"
import { User } from "../../user/user.model"

import { ProjectupdateService } from "./projectupdate.service"


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class ProjectEntryComponent implements OnInit {


  form: FormGroup;
  _location: Location;

  @Input() project:Project;

  constructor(private formBuilder: FormBuilder, 
    private _projectupdateService: ProjectupdateService,
    private location: Location) {
      this._location = location;
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
      projectname: [null],
      userid: [null],
      startdate: [null],
      enddate: [null],
      priority: [null]
    });

    this.project = new Project();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted');
      console.log('form submitted'+this.form.get('projectname').value);
      console.log('form submitted'+this.form.get('userid').value);
      console.log('form submitted'+this.form.get('priority').value);

      let _startDate = this.form.get('startdate').value.year+'-'+this.form.get('startdate').value.month+'-'+
      this.form.get('startdate').value.day

      let _endDate = this.form.get('enddate').value.year+'-'+this.form.get('enddate').value.month+'-'+
      this.form.get('enddate').value.day

      console.log('form submitted'+_startDate);
      console.log('form submitted'+_endDate);



     this.project.name = this.form.get('projectname').value;
     this.project.startDate = _startDate;
     this.project.endDate = _endDate;
     this.project.priority = this.form.get('priority').value;
     this.project.status= 'open';

     let user: User = new User();
     user.name = this.form.get('userid').value

     let userlist: User[] = [];
     userlist.push(user);

     this.project.users = userlist;

      this._projectupdateService.createProject(this.project);
      this._location.back();

    } else {
      // validate all form fields
    }
  }

  

}