import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor(private _http:HttpClient ) { }
  //newsApiUrl
  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&apiKey=9693cdce68034b7abe0deb9a50997aeb"

  //techNewsApiUrl
  techNewsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9693cdce68034b7abe0deb9a50997aeb"

  //businessNewsUrl
  businessNewsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9693cdce68034b7abe0deb9a50997aeb"

 
topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}

techNews():Observable<any>{
  return this._http.get(this.techNewsApiUrl);
}

businessNews():Observable<any>{
  return this._http.get(this.businessNewsApiUrl);
}

searchNews(searchNewsApiUrl:string):Observable<any>{
  return this._http.get(searchNewsApiUrl);
}


}
