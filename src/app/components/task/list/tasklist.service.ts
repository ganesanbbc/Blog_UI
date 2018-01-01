import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Task } from "../task.model";

@Injectable()
export class TasklistService {

  constructor(private http: Http) { 
    console.log("in TasklistService")
    
  }

  list() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get("http://localhost:8080/tasks", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      console.log(data);
      let taskList = [];
      data.forEach((entry) => {
        let task = new Task();
        task.id = entry.id;
        task.name = entry.name;
        task.startDate = entry.startDate;
        task.endDate = entry.endDate;
        task.status = entry.status;
        task.priority = entry.priority;
        taskList.push(task);
      });

      return taskList;
    })
    .catch();
  }

}
