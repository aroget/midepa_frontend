import { Component, OnInit, Input } from '@angular/core';

export interface IDropDown {
  items: [
  {
    label: string,
    id: number
  }
  ];
}

@Component({
  selector: 'md-dropdown',
  templateUrl: './midepa-dropdown.component.html',
  styleUrls: ['./midepa-dropdown.component.scss']
})
export class MidepaDropdownComponent implements OnInit {
  @Input() data: IDropDown;

  constructor() { }

  onChange() {
    // console.log(item);
  }

  ngOnInit() {
    // console.log(this);
  }
}
