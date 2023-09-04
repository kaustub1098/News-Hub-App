import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {path:'search-results/:query',component:SearchResultsComponent},
  {path:'home',component:TopheadingComponent},
  {path:'techNews',component:TechnewsComponent},
  {path:'businessNews',component:BusinessNewsComponent},
  {path:'search',component:SearchBarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
