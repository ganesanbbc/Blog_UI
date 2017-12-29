import { Component, OnInit } from '@angular/core';

import {Project } from "../project.model"
import { ProjectlistService } from "./projectlist.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ProjectListComponent implements OnInit {
  projects: Project[];
  hasProject: boolean;;
  search: string;


  constructor(private listapi: ProjectlistService) {
    
  }

  ngOnInit() : void {
      this.listapi.list()
      .then((projects)=>{
        this.projects = projects;
        console.log(this.projects.length);
        console.log(this.projects.length > 0);
        this.hasProject = this.projects.length > 0;
      });
  }

  onItemClick(item){
    console.log(item.name);
  }

  myEvent($event){
    console.log(this.search);
  }

}
