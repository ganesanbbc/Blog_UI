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
    return this.http.get("https://jsonplaceholder.typicode.com/users", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      let projectList = [];
      data.forEach((entry) => {
        let proj = new Project();
        proj.name = entry.name;
        console.log(proj.name);
        projectList.push(proj);
      });

      return projectList;
    })
    .catch();
  }


}
