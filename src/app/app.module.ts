import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,Routes } from '@angular/router'
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

import { ProjectListComponent } from './components/project/list/list.component';
import { ProjectDetailComponent } from './components/project/detail/detail.component';
import { ProjectEntryComponent } from './components/project/entry/entry.component';

import { UserListComponent } from './components/user/list/list.component';
import { UserDetailComponent } from './components/user/detail/detail.component';
import { UserEntryComponent } from './components/user/entry/entry.component';


import { TaskListComponent } from './components/task/list/list.component';
import { TaskDetailComponent } from './components/task/detail/detail.component';
import { TaskEntryComponent } from './components/task/entry/entry.component';

import { ProjectlistService } from './components/project/list/projectlist.service'
import { ProjectupdateService } from './components/project/entry/projectupdate.service';
import { ProjectreadService } from './components/project/detail/service/projectread.service';

import { UserlistService } from './components/user/list/userlistservice.service'
import { UserdetailService } from './components/user/detail/userdetail.service'
import { UserentryService } from './components/user/entry/userentry.service'

import { TasklistService } from './components/task/list/tasklist.service'
import { TaskdetailService } from './components/task/detail/taskdetail.service'
import { TaskentryService } from './components/task/entry/taskentry.service'


const routes: Routes = [
  {path : 'content',component : ContentComponent},
  {path: '', pathMatch: 'full', redirectTo: 'content'},
  
  {path : 'projects',component : ProjectListComponent},
  {path: 'projects/:id', component: ProjectEntryComponent},
  {path: 'projects/detail/:id', component: ProjectDetailComponent},

  {path : 'users',component : UserListComponent},
  {path : 'users/create',component : UserEntryComponent},
  {path : 'users/detail/:id',component : UserDetailComponent},

  {path : 'tasks',component : TaskListComponent},  
  {path : 'tasks/create',component : TaskEntryComponent},
  {path : 'tasks/detail/:id',component : TaskDetailComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectEntryComponent,    
    UserListComponent,
    UserDetailComponent,
    UserEntryComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskEntryComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,  
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpModule,HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule, 
    MatMenuModule,   
    MatToolbarModule, 
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: 
  [ProjectlistService, ProjectupdateService,ProjectreadService,
  UserlistService, UserentryService, UserdetailService,
  TasklistService, TaskentryService, TaskdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
