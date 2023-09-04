import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit{
  

  constructor( private _services:NewsApiServiceService){}

  //displayData
  topHeadingDisplay:any=[];


  ngOnInit(): void {
    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
    
  }
 
  

}




