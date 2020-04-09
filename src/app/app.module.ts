import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FAQComponent } from './components/faq/faq.component';
import { AdDirective } from './components/component.directive';
import { ComponentsComponent } from './components/components.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDataService } from './components/todo-list/todo-data.service';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ComponentSettingsComponent } from './components/component-settings/component-settings.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { EmbedComponent } from './components/embed/embed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FAQComponent,
    AdDirective,
    ComponentsComponent,
    TodoListComponent,
    CountDownTimerComponent,
    WeatherComponent,
    ComponentSettingsComponent,
    SideBarComponent,
    EmbedComponent
  ],
  entryComponents: [ FAQComponent ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [NgbDropdown],
  bootstrap: [AppComponent]
})
export class AppModule { }
