import { Component, Directive, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color', 'yellow');
    renderer.setStyle(el.nativeElement, 'padding', '5px');
  }
}

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, HighlightDirective],
  template: `
    <h2>Attribute Directive Example</h2>
    <p appHighlight>
      This paragraph is highlighted using the custom directive!
    </p>
  `,
})
export class AttributeDirectiveComponent { } 
