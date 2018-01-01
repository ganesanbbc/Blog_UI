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

import { Task } from "../task.model"
import { TaskentryService } from "./taskentry.service"

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class TaskEntryComponent implements OnInit {
  
  form: FormGroup;
  _location: Location;

  @Input() task:Task;

  constructor(private formBuilder: FormBuilder, 
    private _service: TaskentryService,
    private location: Location) {
      this._location = location;
     }
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null],
      desc: [null],
      userid: [null],
      projectid: [null],
      startdate: [null],
      enddate: [null],
      priority: [null]
    });

    this.task = new Task();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted');
      console.log('form submitted'+this.form.get('name').value)
      console.log('form submitted'+this.form.get('desc').value);
      console.log('form submitted'+this.form.get('startdate').value);
      console.log('form submitted'+this.form.get('enddate').value);
      console.log('form submitted'+this.form.get('priority').value);
      console.log('form submitted'+this.form.get('projectid').value);
      console.log('form submitted'+this.form.get('userid').value);
      
      let _startDate = this.form.get('startdate').value.year+'-'+this.form.get('startdate').value.month+'-'+
      this.form.get('startdate').value.day

      let _endDate = this.form.get('enddate').value.year+'-'+this.form.get('enddate').value.month+'-'+
      this.form.get('enddate').value.day


     this.task.name = this.form.get('name').value;
     this.task.startDate = _startDate;
     this.task.endDate = _endDate;
     this.task.priority = this.form.get('priority').value;
     this.task.status= 'open';

    //  let user: User;
    //  user.name = this.form.get('userid').value
    //  let userlist: User[];
    //  userlist.push(user);

    //  this.project.users = userlist;

      this._service.createTask(this.task);
      this._location.back();

    } else {
      // validate all form fields
    }
  }


}
