import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../../models/Student.model";

@Component({
  selector: 'app-row-component',
  templateUrl: './row-component.component.html',
  styleUrls: ['./row-component.component.css']
})
export class RowComponentComponent implements OnInit {
  @Input()
  student: Student;
  @Input()
  disableEdit: boolean;
  @Output()
  update: EventEmitter<any>;
  @Output()
  delete: EventEmitter<number>;
  constructor() {
    this.update = new EventEmitter<any>();
    this.delete = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  updateSubject(subject: String, $event: Event) {
    this.student.updateMarks(subject, $event);
    this.update.emit();
  }
}
