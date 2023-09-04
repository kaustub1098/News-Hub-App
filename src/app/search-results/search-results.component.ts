import { Component,Input } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  searchNewsDisplay:any=[];

  constructor(){}

  ngOnInit():void{
  
    

  }
  
}
