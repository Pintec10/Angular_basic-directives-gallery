import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

//this custom structural directive will repeat an element for a specified number of times
@Directive({
  selector: '[appMultiplier]'
})
export class MultiplierDirective {

  constructor(
    private viewContainer: ViewContainerRef,    //the element to which we are applying the directive; easier than ElementRef for adding/removing elements to it
    private templateRef: TemplateRef<any>     //the elements which are inside the element to which we are applying the directive
  ) { }

  @Input('appMultiplier') set render(times: number) {
    //empty the container
    this.viewContainer.clear();

    //fill it with its original content for the specified number of times
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i      //everything put inside this context object is made available for aliasing in the HTML template file; here, the value of i is made available with the name 'index'
      });
    }
  }
}
