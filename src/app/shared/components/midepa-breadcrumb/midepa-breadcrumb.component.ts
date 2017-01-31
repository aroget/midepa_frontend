import { Component, OnInit, Input } from '@angular/core';

export interface IBreadCrumb {
 name: string;
 url: string;
}

@Component({
  selector: 'md-breadcrumb',
  templateUrl: './midepa-breadcrumb.component.html',
  styleUrls: ['./midepa-breadcrumb.component.scss']
})
export class MidepaBreadCrumbComponent implements OnInit {
  @Input() data: IBreadCrumb[];

  constructor() { }

  ngOnInit() { }
}
