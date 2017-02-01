import { Component, OnInit, Input } from '@angular/core';

export interface IPageHeader {
  name: string;
  rating: number;
}

@Component({
  selector: 'md-page-header',
  templateUrl: './midepa-page-header.component.html',
  styleUrls: ['./midepa-page-header.component.scss']
})
export class MidepaPageHeaderComponent implements OnInit {
  @Input() data: IPageHeader;

  constructor() { }

  ngOnInit() {}
}
