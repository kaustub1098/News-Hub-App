import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchQuery :string ='';

  constructor(private router: Router) {}

  searchNews() {
    // Navigate to the search results page with the search query as a parameter
    this.router.navigate(['/search-results', this.searchQuery]);

     // Clear the input text
     this.searchQuery = '';
  }

}
