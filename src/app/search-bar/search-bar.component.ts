import { Component } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchNewsApiUrl=""

  searchQuery :string ='';

  searchNewsDisplay:any=[];
  
  constructor(private _services:NewsApiServiceService){}
 
  searchNews(){
  this.searchNewsApiUrl=`https://newsapi.org/v2/everything?q=${this.searchQuery}&sortBy=relevancy&searchIn=title&language=en&pageSize=2&apiKey=9693cdce68034b7abe0deb9a50997aeb`;
    console.log(this.searchQuery)
    this._services.searchNews(this.searchNewsApiUrl).subscribe((result)=>{
      this.searchNewsDisplay=result.articles;
      console.log(result);
    })
  }

}
