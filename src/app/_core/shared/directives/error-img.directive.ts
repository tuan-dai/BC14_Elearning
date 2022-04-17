import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appErrorImg]'
})
export class ErrorImgDirective {

  constructor(private el: ElementRef) {
  }
  @HostListener("error") handleError() {
    this.el.nativeElement.src = "https://bitsofco.de/content/images/2018/12/broken-1.png";
  }

}
