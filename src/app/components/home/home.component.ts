import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { TrendingComponent } from '../content/trending/trending.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, TrendingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  placeholder: string = "Search for movies or TV series";
}
