import { Injectable } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map'

import { User } from "../user.model"

@Injectable()
export class UserentryService {

  addUser: string = 'http://localhost:8080/users';
  http: Http;

  constructor(public _http: Http) {
    this.http = _http;
   }

   createUser(user:User){

    console.log('In Service::::::: '+ user.name);
    
    this.http.post(this.addUser, user, { 
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
