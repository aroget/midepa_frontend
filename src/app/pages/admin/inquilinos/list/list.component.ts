import { Component, OnInit } from '@angular/core';

import { InquilinosService } from '../inquilinos.service';

@Component({
  selector: 'md-inquilinos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class InquilinosListComponent implements OnInit {
  pageHeader;
  inquilinos = [];

  constructor(
    private service: InquilinosService
  ) {
    this.pageHeader = {
      name: 'Salvador Zarate',
      rating: 4
    };

    this.service.getInquilinos().subscribe(res => this.inquilinos = res);
  }

  ngOnInit() { }
}
