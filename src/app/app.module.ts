import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ListComponent } from './components/project/list/list.component';
import { DetailComponent } from './components/project/detail/detail.component';
import { EntryComponent } from './components/project/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ListComponent,
    DetailComponent,
    EntryComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,  
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path : 'content',
        component : ContentComponent
      },
      { path: '', pathMatch: 'full', redirectTo: 'content'}
      
    ], {useHash: true}),
    HttpModule,HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule, 
    MatMenuModule,   
    MatToolbarModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
