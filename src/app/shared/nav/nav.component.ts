import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() editMode: boolean;
  @Output() modeEdit: EventEmitter<any> = new EventEmitter();
  @Output() addEle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeEditMode() {
    this.editMode = !this.editMode;

    this.modeEdit.emit(this.editMode)
  }

  addRow() {
    this.editMode = true;

    this.modeEdit.emit(this.editMode)

    this.addEle.emit('3')
  }

}
