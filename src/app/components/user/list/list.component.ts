import { Component, OnInit } from '@angular/core';


import {User } from "../user.model"
import { UserlistService } from "./userlistservice.service"



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  search: string;
  
  constructor(private listapi: UserlistService) {
    
  }

  ngOnInit() : void {
      this.listapi.list()
      .then((user)=>{
        this.users = user;
      });
  }

  onItemClick(item){
    console.log(item.name);
  }

  myEvent($event){
    console.log(this.search);
  }



}
