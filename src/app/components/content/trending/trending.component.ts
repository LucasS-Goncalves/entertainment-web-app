import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent {

  photos = [
    {
      url: "../../../../assets/thumbnails/112/regular/medium.jpg",
      isBookmarked: false,
      type: 'Movie',
      year: '2020',
      contentRating: '18+',
      title: 'Beyond Earth'
    },
    {
      url: "../../../../assets/thumbnails/112/regular/medium.jpg",
      isBookmarked: true,
      type: 'TV Series',
      year: '2010',
      contentRating: 'PG',
      title: 'Bottom Gear'
    },
    {
      url: "../../../../assets/thumbnails/112/regular/medium.jpg",
      isBookmarked: false,
      type: 'TV Series',
      year: '2022',
      contentRating: 'PG',
      title: 'Beyond Earth'
    },
    {
      url: "../../../../assets/thumbnails/112/regular/medium.jpg",
      isBookmarked: false,
      type: 'Movie',
      year: '2012',
      contentRating: 'PG',
      title: 'Beyond Earth'
    },
    {
      url: "../../../../assets/thumbnails/112/regular/medium.jpg",
      isBookmarked: false,
      type: 'Movie',
      year: '2015',
      contentRating: 'PG',
      title: 'Beyond Earth'
    },
    {
      url: "../../../../assets/thumbnails/112/regular/medium.jpg",
      isBookmarked: false,
      type: 'Movie',
      year: '2021',
      contentRating: 'PG',
      title: 'Beyond Earth'
    },
  ];

  @ViewChild('imageContainer') imageContainer!: ElementRef<HTMLDivElement>;

  scrollToLeft(){
    this.imageContainer.nativeElement.scrollLeft = this.imageContainer.nativeElement.scrollLeft - 700;
  }

  scrollToRight(){
    this.imageContainer.nativeElement.scrollLeft = this.imageContainer.nativeElement.scrollLeft + 700;
  }

  isBookmarked(index: number){
    this.photos[index].isBookmarked = !this.photos[index].isBookmarked;
  }

}
