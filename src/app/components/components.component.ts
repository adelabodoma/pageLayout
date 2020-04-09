import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Icomponent } from '../data-interface';
import { AdDirective } from './component.directive';

@Component({
  selector: 'app-components',
  template: '<ng-template component-host></ng-template>',
  styles: [':host{width: 100%}']
})
export class ComponentsComponent implements OnInit {

  @Input() component: Icomponent;
  @Input() data: Icomponent;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent()
  }


  loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory, 0).instance;
    componentRef.data = this.data;
  }
}
