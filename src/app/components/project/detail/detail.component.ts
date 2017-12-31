import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes,ActivatedRoute } from '@angular/router'



import { Project } from "../project.model"
import { User } from "../../user/user.model"
import { ProjectreadService } from "./service/projectread.service"


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  id: string;

  constructor(private activatedRoute: ActivatedRoute, _projectreadService:ProjectreadService) {

    this.id = this.activatedRoute.snapshot.params['id'];

    console.log(this.id);
    _projectreadService.load(this.id).then((projects)=>{
      this.project = projects;
      console.log(this.project.name)
      console.log(this.project.startDate)
      console.log(this.project.endDate)
      console.log(this.project.status)
    });

    
   }

  ngOnInit() {
    
  }

}
