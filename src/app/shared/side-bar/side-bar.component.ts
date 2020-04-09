import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() setting:any;
  @Input() open:boolean;
  @Output() universeSettings = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onReciveSettings(event){
    this.universeSettings.emit(event);
  }
}
