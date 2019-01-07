import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  url = 'https://api.github.com/users/vladwoguer/followers';

  constructor(private http: HttpClient) { }


  getFollowers() {
    return this.http.get(this.url);
  }
}
