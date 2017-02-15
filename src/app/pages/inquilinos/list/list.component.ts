import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-inquilinos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class InquilinosListComponent implements OnInit {
  pageHeader;
  inquilinos = [];

  constructor() {
    this.pageHeader = {
      name: 'Salvador Zarate',
      rating: 4
    };
  }

  ngOnInit() { }
}
