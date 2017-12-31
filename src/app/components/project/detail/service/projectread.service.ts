import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Project } from "../../project.model";


@Injectable()
export class ProjectreadService {

  constructor(private http: Http) { }


  load(id) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get("http://localhost:8080/projects/"+id, {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      return data;
    })
    .catch();
  }

}
