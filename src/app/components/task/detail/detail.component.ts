import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes,ActivatedRoute } from '@angular/router'


import { Task } from "../../task/task.model"
import { TaskdetailService } from "./taskdetail.service"

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class TaskDetailComponent implements OnInit {

  task:Task;
  id: string;

 constructor(private activatedRoute: ActivatedRoute, 
    _service:TaskdetailService) {

    this.id = this.activatedRoute.snapshot.params['id'];

    console.log(this.id);
    _service.load(this.id).then((user)=>{
      this.task = user;
    });

    
   }

  ngOnInit() {
  }

}
