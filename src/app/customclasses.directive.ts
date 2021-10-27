import { Directive, ElementRef, Input } from '@angular/core';

//this custom attribute directive applies a specified background color to a given element
@Directive({
  selector: '[appCustomclasses]'
})
export class CustomclassesDirective {

  constructor(private elementRef: ElementRef) { }

  //the 'set' keywords makes it so that whenever one is assigning the backgroundColor property, this method is called
  // the '@Input()' makes it so that backgroundColor can be assigned as a property for the custom directive in the HTML template
  @Input() set backgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  //by calling this method with the same name as the directive, in the HTML template there won't be any need to specify first the directive and then the property
  // one can just use [appCustomClass]="..."
  /*
  @Input() set appCustomclasses(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
  */

  //alternatively, one can call the method with any name, but specify for it an alternate name in the @Input() arguments, and have this alternate name be the same as that of the directive
  @Input('appCustomclasses') set bgColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  //this implementation instead would allow the same functionality as the ngClass directive:
  /*
  @Input('appCustomclasses') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }
  */
}
