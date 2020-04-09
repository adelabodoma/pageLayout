import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-settings',
  templateUrl: './component-settings.component.html',
  styleUrls: ['./component-settings.component.scss']
})
export class ComponentSettingsComponent implements OnInit {
  @Input() setting: any;
  @Output() outSettings = new EventEmitter<any>();

  constructor() {
    console.log(this.setting)
   }

  ngOnInit(): void {
  }

  onSubmitSettings(){
    this.outSettings.emit(this.setting);
  }
}
