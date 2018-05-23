import { Component } from '@angular/core';
import {StudentList} from "../models/StudentList.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  studentList: StudentList;

  constructor() {
    this.studentList = new StudentList();
  }
}
