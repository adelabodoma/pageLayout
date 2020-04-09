import { Component, OnInit, ComponentFactoryResolver, ViewChild, Output } from '@angular/core';
import { List, Icomponent, ListItem } from './data-interface.js';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient } from '@angular/common/http';

import * as data from '../assets/data.json'
import { DomSanitizer } from '@angular/platform-browser';
import { LoadComponentService } from './components/load-component.service.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'page-layout';
  public list: List;
  public schema;
  public components;
  public editMode: boolean;
  private componentsList: Icomponent[];
  public componentSetting: any;
  @Output() openModal: boolean = false;

  public currentEditRowIndex: number;
  public currentEditColumnIndex: number;
  public currentEditComponentIndex: number;


  constructor(private http: HttpClient, public sanitizer: DomSanitizer,
    private loadComponentService: LoadComponentService) { }

  ngOnInit() {
    this.list = data['default']['page-info'];
    this.schema = this.list.schema;
    this.components = this.list.components

    this.componentsList = this.loadComponentService.getComponents();

    // map component 
    this.list.components.forEach((co, index) => {
      co.component = this.componentsList[index]
    });

    // add css dynamic 
    this.list.rows.forEach(row => {
      this.dynamicCSSClasses(row.type, row);
    })
  }

  addRow(type, index) {

    let columns, ID;

    switch (type) {
      case '1-2':
        columns = Array(2).fill(undefined).map(() => {
          return { id: uuidv4(), components: [] }
        });
        break;
      case '2-1':
        columns = Array(2).fill(undefined).map(() => {
          return { id: uuidv4(), components: [] }
        });
        break;
      default:
        columns = Array(+type).fill(undefined).map(() => {
          return { id: uuidv4(), components: [] }
        });
        break;
    }

    // GENERATE ID
    ID = uuidv4();

    this.list.rows.splice(index, 0, {
      id: ID,
      type: type,
      columns: columns
    })

    // dynamic css class 
    this.dynamicCSSClasses(type, this.list.rows[index])
  }

  editRow(type, index) {
    // change type
    this.list.rows[index].type = type;

    // d.	When col schema is changed from 3 col to 2 or 1 its components should be moved to prev col
    if (this.list.rows[index].columns.length === 3 && (type === '2' || type === '2-1' || type === '1-2')) {
      this.list.rows[index].columns[1].components.push(...this.list.rows[index].columns[2].components);
      this.list.rows[index].columns.splice(2, 1);
    }

    if (this.list.rows[index].columns.length === 3 && type === '1') {
      this.list.rows[index].columns[0].components.push(...this.list.rows[index].columns[1].components);
      this.list.rows[index].columns[0].components.push(...this.list.rows[index].columns[2].components);
      this.list.rows[index].columns.splice(1, 3);
    }

    // when col schema is changed from 2 to 3 append empty column 
    if (this.list.rows[index].columns.length < type) {
      while (this.list.rows[index].columns.length < type) {
        this.list.rows[index].columns.push({ id: uuidv4(), components: [] })
      }
    }

    // add dynamic css class 
    this.dynamicCSSClasses(type, this.list.rows[index])
  }

  removeRow(id) {
    this.list.rows = this.list.rows.filter(item => item.id != id)
  }

  addComponent(rowId, columnId, component) {
    this.list.rows[rowId].columns[columnId].components.push(component);
  }

  removeComponent(rowId, columnId, componentId) {
    this.list.rows[rowId].columns[columnId].components.splice(componentId, 1);
  }

  chnageModeEdit(mode) {
    this.editMode = mode;
  }

  dynamicCSSClasses(type, row: ListItem) {
    switch (type) {
      case '1':
        row.columns.forEach(col => {
          col.cssClass = 'col-sm-12'
        });
        break;
      case '2':
        row.columns.forEach(col => {
          col.cssClass = 'col-sm-6'
        });
        break;
      case '3':
        row.columns.forEach(col => {
          col.cssClass = 'col-sm-4'
        });
        break;
      case '1-2':
        row.columns[0].cssClass = 'col-sm-4';
        row.columns[1].cssClass = 'col-sm-8';
        break;
      case '2-1':
        row.columns[0].cssClass = 'col-sm-8';
        row.columns[1].cssClass = 'col-sm-4';
        break;
      default:
        break;
    }
  }

  onAddComponentSetting(setting, rowIndex, columnIndex, componentIndex) {
    this.componentSetting = {...setting};
    this.openModal = !this.openModal;

    this.currentEditRowIndex = rowIndex;
    this.currentEditColumnIndex = columnIndex;
    this.currentEditComponentIndex = componentIndex;
  }

  onReciveSettings(event) {
    this.list.rows[this.currentEditRowIndex].columns[this.currentEditColumnIndex].components[this.currentEditComponentIndex].setting = event;

    this.openModal = !this.openModal;
  }
}
