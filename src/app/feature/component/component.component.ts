import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ComponentComponent {
  message: string,
  name: string
}

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule], // <-- needed for ngNonBindable
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})

export class ComponentComponent {
  message = 'Component!';
  name = 'Samnoeun';

  changeName() {
    this.name = "Component Testing";
  }
  resetName() {
    this.name = "Samnoeun";
  }
}
