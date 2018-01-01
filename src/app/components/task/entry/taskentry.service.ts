import {HttpModule, Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


import { Task } from "../task.model"

@Injectable()
export class TaskentryService {

  addTask: string = 'http://localhost:8080/tasks'
  http: Http;

  constructor(public _http: Http) {
    this.http = _http;
   }


  createTask(task:Task){
 this.http.post(this.addTask, task, { 
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

}
