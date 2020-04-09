import { Injectable, OnInit } from '@angular/core';
import { FAQComponent } from './faq/faq.component';
import { Icomponent } from '../data-interface';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { WeatherComponent } from './weather/weather.component';
import { EmbedComponent } from './embed/embed.component';

@Injectable({
  providedIn: 'root'
})
export class LoadComponentService {
  private list: Icomponent[] = [
    {
      component: FAQComponent,
    },
    {
      component: TodoListComponent,
    },
    {
      component: CountDownTimerComponent,
    },
    {
      component: WeatherComponent,
    },
    {
      component: EmbedComponent,
    }
  ];

  constructor() { }


  getComponents() {
    return [...this.list]

  }
}
