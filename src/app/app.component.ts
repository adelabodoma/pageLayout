import { Component, OnInit } from '@angular/core';
import { List } from './data-interface.js';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient } from '@angular/common/http';

import * as data from '../assets/data.json'

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.list = data['default']['page-info'];
    this.schema = this.list.schema;
    this.components = this.list.components
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

  }

  editRow(type, index) {
    // change type
    this.list.rows[index].type = type;

    // d.	When col schema is changed from 3 col to 2 or 1 its components should be moved to prev col
    if (this.list.rows[index].columns.length === 3) {
      this.list.rows[index].columns[1].components.push(...this.list.rows[index].columns[2].components);
      this.list.rows[index].columns.splice(2, 1);
    }

    // when col schema is changed from 2 to 3 append empty column 
    if (this.list.rows[index].columns.length === 2 && type === '3') {
      this.list.rows[index].columns.push({id: uuidv4(), components: []})
    }
  }

  removeRow(id) {
    this.list.rows = this.list.rows.filter(item => item.id != id)
  }

  addComponent(rowId, columnId, component) {
    this.list.rows[rowId].columns[columnId].components.push(component);
    console.log(this.list.rows)

    this.http.get('aa.html').subscribe(res=>{
      debugger
    })
  }

  removeComponent(rowId, columnId, componentId) {
    this.list.rows[rowId].columns[columnId].components.splice(componentId, 1);
  }

  chnageModeEdit(mode) {
    this.editMode = mode;
  }

}
