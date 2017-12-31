import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Project } from "../project.model";


@Injectable()
export class ProjectlistService {


  constructor(private http: Http) { 
    console.log("in ProjectlistService")
    
  }

  list() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get("http://localhost:8080/projects", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      let projectList = [];
      data.forEach((entry) => {
        let proj = new Project();
        proj.id = entry.id;
        proj.name = entry.name;
        proj.startDate = entry.startDate;
        proj.endDate = entry.endDate;
        proj.status = entry.status;
        proj.priority = entry.priority;
        console.log(proj.name);
        console.log(proj.startDate);
        console.log(proj.endDate);
        console.log(proj.status);
        console.log(proj.priority);
        projectList.push(proj);
      });

      return projectList;
    })
    .catch();
  }


}
