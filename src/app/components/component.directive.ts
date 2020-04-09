import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[component-host]'

})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {  }
}