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

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      projectname: [null],
      userid: [null],
      startdate: [null],
      enddate: [null],
      priority: [null]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted');
      console.log('form submitted'+this.form.get('projectname').value);
      console.log('form submitted'+this.form.get('userid').value);
      console.log('form submitted'+this.form.get('startdate').value);
      console.log('form submitted'+this.form.get('enddate').value);
      console.log('form submitted'+this.form.get('priority').value);
    } else {
      // validate all form fields
    }
  }

}
