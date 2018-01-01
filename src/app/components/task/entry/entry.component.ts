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
import { ParentTask } from "../parenttask.model"
import { TaskentryService } from "./taskentry.service"
import { ParenttaskentryService } from "./parenttaskentry.service"

import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class TaskEntryComponent implements OnInit {
  
  form: FormGroup;
  _location: Location;
  checkboxValue:boolean = false;

  addProp($event){
    this.checkboxValue = !this.form.get('checkboxValue').value;
    console.log(this.checkboxValue);
  }



  @Input() task:Task;
  @Input() parenttask:ParentTask;

  constructor(private formBuilder: FormBuilder, 
    private _service: TaskentryService,
    private _parenttaskservice: ParenttaskentryService,
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
      priority: [null],
      checkboxValue:[false]
    });

    this.task = new Task();
    this.parenttask = new ParentTask();
  }

  onSubmit() {
    if (this.form.valid) {
      
      
    //  let user: User;
    //  user.name = this.form.get('userid').value
    //  let userlist: User[];
    //  userlist.push(user);

    //  this.project.users = userlist;

    if(this.checkboxValue){
      this.parenttask.name = this.form.get('name').value;
      this._parenttaskservice.createTask(this.parenttask);
    }else{
      let _startDate = this.form.get('startdate').value.year+'-'+this.form.get('startdate').value.month+'-'+
      this.form.get('startdate').value.day

      let _endDate = this.form.get('enddate').value.year+'-'+this.form.get('enddate').value.month+'-'+
      this.form.get('enddate').value.day


     this.task.name = this.form.get('name').value;
     this.task.startDate = _startDate;
     this.task.endDate = _endDate;
     this.task.priority = this.form.get('priority').value;
     this.task.status= 'open';

      this._service.createTask(this.task);
      
    }

      this._location.back();

    } else {
      // validate all form fields
    }
  }


}
