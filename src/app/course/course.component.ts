import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseForm: FormGroup

  categories = ['Development', 'Art', 'Languages'];

  constructor() { }

  ngOnInit() {

    this.courseForm = new FormGroup({
      courseName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      category: new FormControl('', [Validators.required]),
      garantee: new FormControl(false)
    });
  }


  submitForm(courseForm: FormGroup) {
    console.log(courseForm);
  }
}
