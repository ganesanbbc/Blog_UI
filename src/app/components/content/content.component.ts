import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  mData: Array<any>;
  
    constructor(private http:Http, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
      
      this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.mData = res);
      
      iconRegistry.addSvgIconSetInNamespace('core',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/core-icon-set.svg'));
  
  
     
    } 
  ngOnInit() {
  }

}


