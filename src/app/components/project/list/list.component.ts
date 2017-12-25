import { Component, OnInit } from '@angular/core';

import {Project } from "../project.model"
import { ProjectlistService } from "../service/projectlist.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ProjectListComponent implements OnInit {
  projects: Project[];

  constructor(private listapi: ProjectlistService) {}

  ngOnInit() : void {
      this.listapi.list()
      .then((projects)=>{
        this.projects = projects;
      });
  }

}
