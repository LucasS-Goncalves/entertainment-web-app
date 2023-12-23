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
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
    "../../../../assets/thumbnails/112/regular/medium.jpg",
  ];

  @ViewChild('imageContainer') imageContainer!: ElementRef<HTMLDivElement>;

  scrollToLeft(){
    this.imageContainer.nativeElement.scrollLeft = this.imageContainer.nativeElement.scrollLeft - 250;
  }

  scrollToRight(){
    this.imageContainer.nativeElement.scrollLeft = this.imageContainer.nativeElement.scrollLeft + 233;
  }


}
