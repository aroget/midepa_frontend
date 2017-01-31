import { Component, OnInit, Input } from '@angular/core';

export const AVATAR_SIZE = {
  'SMALL': 'small',
  'LARGE': 'large',
  'DEFAULT': 'default',
};
export interface IAvatar {
  type: string;
  image: string;
}

@Component({
  selector: 'md-avatar',
  templateUrl: './midepa-avatar.component.html',
  styleUrls: ['./midepa-avatar.component.scss']
})
export class MidepaAvatarComponent implements OnInit {
  @Input() avatar: IAvatar;

  constructor() { }

  ngOnInit() {
    console.log(this.avatar);
  }
}
