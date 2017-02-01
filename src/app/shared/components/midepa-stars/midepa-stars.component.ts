import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'md-stars',
  templateUrl: './midepa-stars.component.html',
  styleUrls: ['./midepa-stars.component.scss']
})
export class MidepaStarsComponent implements OnInit {
  @Input() rating: number;
  MAX_RATING = 5;
  icon: string;
  maxRatingIterable = [];

  constructor() { }

  fillStars(number: number) {

    if (this.rating > number) {
      return {
        'icon': 'star',
        'class': 'filled'
      };
    } else if (this.rating <= number) {
      return {
        'icon': 'star_border',
        'class': 'default'
      };
    }
  }

  ngOnInit() {
    for (let i = 0; i <= this.MAX_RATING; i++) {
      this.maxRatingIterable.push(this.fillStars(i));
    }
  }
}
