import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitalize',
  templateUrl: './capitalize.component.html',
  styleUrls: ['./capitalize.component.css']
})
export class CapitalizeComponent implements OnInit {

  text: string;
  constructor() { }

  ngOnInit() {
  }

}
