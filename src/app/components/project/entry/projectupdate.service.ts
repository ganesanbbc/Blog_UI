import {HttpModule, Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'

import {Project } from "../project.model"

@Injectable()
export class ProjectupdateService {

  add_project: string = 'http://localhost:8080/projects';

  http: Http;
 

  constructor(public _http: Http) {
    this.http = _http;
   }


  createProject(project:Project){

    
    this.http.post(this.add_project, project, { 
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
