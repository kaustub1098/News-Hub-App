import { Component ,OnInit} from '@angular/core';
import {NewsApiServiceService} from '../service/news-api-service.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {

  constructor(private _services:NewsApiServiceService){}
  techNewsDisplay:any=[];
  

  ngOnInit():void{
  this._services.techNews().subscribe((result)=>{
    this.techNewsDisplay=result.articles;
    
  })
  }

}
