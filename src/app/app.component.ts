import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'page-layout';
  private list: List

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.list = data.default['page-info'];

    setTimeout(() => {
      // this.addRow('2-1')
      // this.addRow('3')
      // this.addRow('1-2')
      // this.addRow('2')
      // this.addRow('1')
    }, 2000);
  }

  addRow(type, index) {
    let columns;


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

    this.list.rows.splice(index, 0, {
      id: '20',
      type: type,
      columns: columns
    })
 
  }

  editRow(type, index) {
    debugger
    this.list.rows[index].type = type;
  }

}




interface List {
  rows: ListItem[]
}

interface ListItem {
  id: string;
  type: string;
  columns: ItemComponents[]
}
interface ItemComponents {
  id: string;
  components: ItemComponent[]
}
interface ItemComponent {
  id: string;
  title: string;
  URL: string;
  icon: string
}