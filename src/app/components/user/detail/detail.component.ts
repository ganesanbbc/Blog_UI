import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes,ActivatedRoute } from '@angular/router'



import { User } from "../../user/user.model"
import { UserdetailService } from "./userdetail.service"


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})


export class UserDetailComponent implements OnInit {

  user: User;
  id: string;

  constructor(private activatedRoute: ActivatedRoute, 
    _service:UserdetailService) {

    this.id = this.activatedRoute.snapshot.params['id'];

    console.log(this.id);
    _service.load(this.id).then((user)=>{
      this.user = user;
      console.log(this.user.name)
      console.log(this.user.email)
      console.log(this.user.role)
    });

    
   }

  ngOnInit() {
  }

}
