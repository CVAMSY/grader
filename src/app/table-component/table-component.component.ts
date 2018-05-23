import {Component, Input, OnInit} from '@angular/core';
import {StudentList} from "../../models/StudentList.model";

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  @Input()
  list: StudentList;
  constructor() { }

  ngOnInit() {
  }

}
