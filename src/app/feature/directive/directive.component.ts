import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive.component',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss',
  template: `Hello guide ho hfiugdugfjfgugd7f
  <h1>
  </h1>`
})
export class DirectiveComponent {
  isLoggedIn: boolean = true;
}
