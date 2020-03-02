import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // Dep Injection
    console.log('======= Inside Attribute Directive =======');
    // 1. find the element in which the colorizer directive is used
    console.log(this.elRef.nativeElement);
    const myElement = this.elRef.nativeElement;
    // 2. change the color
    // in js way
    // myElement.style.backgroundColor = 'red';
    // myElement.style.height = '200px';
    // myElement.style.color = '#fff';
    // in angular's way
    this.renderer.setStyle(myElement, 'background-color', 'red');
    this.renderer.setStyle(myElement, 'color', '#fff');
    this.renderer.setStyle(myElement, 'height', '200px');
    // ref renderer2's api for more methods
  }

   // Handle Events inside Custom Directive
   @HostListener('click', ['$event.target'])
   onElementClick(clickedElement) {
     console.log(clickedElement);
     this.renderer.setStyle(clickedElement, 'background-color', 'yellow');
     this.renderer.setStyle(clickedElement, 'color', 'black');
   }

}
