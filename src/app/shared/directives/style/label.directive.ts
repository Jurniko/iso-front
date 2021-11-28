import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[jLabel]'
})
export class LabelDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.classList.add('block','my-4')

   }

}
