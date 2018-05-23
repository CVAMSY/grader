import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inline-edit-component',
  templateUrl: './inline-edit-component.component.html',
  styleUrls: ['./inline-edit-component.component.css']
})
export class InlineEditComponentComponent implements OnInit {
  @Input()
  value: string;
  editMode: boolean;
  editValue: string;

  @Input()
  disableEdit: boolean;
  @Output('update')
  update: EventEmitter<string>;
  constructor() {
    this.update = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  enterEditMode() {
    if (!this.disableEdit) {
      this.editValue = this.value;
      this.editMode = true;
    }

  }

  exitEditMode(ev) {
    console.log(ev);
    if(ev.key === 'Enter') {
      this.editMode = false;
      this.update.emit(this.editValue);
    }

  }
}
