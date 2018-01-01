import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { User } from "../user.model";


@Injectable()
export class UserlistService {

  constructor(private http: Http) { 
    console.log("in ProjectlistService")
    
  }

  list() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get("http://localhost:8080/users", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      console.log(data);
      let userlist = [];
      data.forEach((entry) => {
        let user = new User();
        user.id = entry.id;
        user.name = entry.name;
        user.email = entry.email;
        user.role = entry.role;
        userlist.push(user);
      });

      return userlist;
    })
    .catch();
  }

}
