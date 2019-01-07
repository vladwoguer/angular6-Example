import { Component, OnInit } from '@angular/core';
import {FollowersService} from './followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers = [];

  constructor(private followersService: FollowersService) { }

  ngOnInit() {
    this.followersService.getFollowers().subscribe((response) => {
      console.log(response);
      return this.followers = response as any[];
      }, (err) => {console.log(err); });
  }

}
