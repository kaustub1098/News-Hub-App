import { Component,Input } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  searchQuery :string ='';
  
  searchNewsApiUrl=""

  searchNewsDisplay:any=[];

  constructor(private _services:NewsApiServiceService,private route: ActivatedRoute){}

  ngOnInit():void{
  
    // Retrieve the search query route parameter
    this.route.params.subscribe(params => {
      this.searchQuery = params['query'];
    // Use this.searchQuery to fetch and display search results asynchronously
      this.searchNews();
    });
  }

  searchNews(){
  this.searchNewsApiUrl=`https://newsapi.org/v2/everything?q=${this.searchQuery}&sortBy=relevancy&searchIn=title&language=en&pageSize=7&apiKey=9693cdce68034b7abe0deb9a50997aeb`;
    console.log(this.searchQuery)
    this._services.searchNews(this.searchNewsApiUrl).subscribe((result)=>{
      this.searchNewsDisplay=result.articles;
      console.log(result);
    })
  }
  
}
