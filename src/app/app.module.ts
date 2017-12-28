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

const routes: Routes = [
  {path : 'content',component : ContentComponent},
  {path: '', pathMatch: 'full', redirectTo: 'content'},
  {path : 'projects',component : ProjectListComponent},
  {path: 'projects/:id', component: ProjectEntryComponent},
  {path : 'users',component : UserListComponent},
  {path : 'tasks',component : TaskListComponent}  
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
  providers: [ProjectlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
