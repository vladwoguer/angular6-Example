import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit {

  details = false;

  @Input() title: string;


  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.details = !this.details;
  }
}
