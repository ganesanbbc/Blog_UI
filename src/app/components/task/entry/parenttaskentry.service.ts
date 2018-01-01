import {HttpModule, Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'


import { ParentTask } from "../parenttask.model"
@Injectable()
export class ParenttaskentryService {

  addTask: string = 'http://localhost:8080/parenttasks'
  http: Http;

  constructor(public _http: Http) {
    this.http = _http;
   }


  createTask(parenttask:ParentTask){
 this.http.post(this.addTask, parenttask, { 
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
