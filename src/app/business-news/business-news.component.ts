import { Component } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent {

  businessNewsDisplay:any=[];

  constructor(private _services:NewsApiServiceService){}

 

  ngOnInit():void{
    this._services.businessNews().subscribe((result)=>{
      this.businessNewsDisplay=result.articles;
    })
  }
}
