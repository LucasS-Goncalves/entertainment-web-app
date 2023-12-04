import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() placeholder!: string;
  @ViewChild('searchInput', {static: false}) searchInput!:ElementRef<HTMLInputElement>;
}
