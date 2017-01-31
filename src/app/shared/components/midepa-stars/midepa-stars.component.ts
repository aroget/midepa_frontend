import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'md-stars',
  templateUrl: './midepa-stars.component.html',
  styleUrls: ['./midepa-stars.component.scss']
})
export class MidepaStarsComponent implements OnInit {
  @Input() rating: number;

  constructor() { }

  ngOnInit() { }
}
