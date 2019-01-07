import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() likesCount: number;

  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  clickLike() {

    if (this.isActive) {
      this.isActive = false;
      this.likesCount++;
    } else {
      this.isActive = true;
      this.likesCount--;
    }
  }
}
