import { Component, OnInit } from '@angular/core';


import { Task } from "../task.model"
import { TasklistService } from "./tasklist.service"



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  search: string;
  
  constructor(private listapi: TasklistService) {
    
  }

  ngOnInit() : void {
      this.listapi.list()
      .then((tasks)=>{
        this.tasks = tasks;
      });
  }

  onItemClick(item){
    console.log(item.name);
  }

  myEvent($event){
    console.log(this.search);
  }


}
