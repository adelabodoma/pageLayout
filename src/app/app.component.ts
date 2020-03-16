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
  private list: List;
  private schema;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.list = data.default['page-info'];
    this.schema = this.list.schema;
  }

  addRow(type, index) {
    let columns, ID;

    switch (type) {
      case '1-2':
        columns = Array(2).fill({ id: 10, components: [] });
        break;
      case '2-1':
        columns = Array(2).fill({ id: 10, components: [] });
        break;
      default:
        columns = Array(+type).fill({ id: 10, components: [] });
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
    this.list.rows[index].type = type;
  }

  removeRow(id){
    this.list.rows = this.list.rows.filter(item => item.id != id)
  }

}
