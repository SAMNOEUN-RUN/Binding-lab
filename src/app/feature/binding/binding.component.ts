import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding', // ✅ no dot in selector
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  title = 'Angular Intern';
  imageUrl = 'asset/name.jpg';
  username = '';

  titles = 'Welcome';
  imageUrls = 'asset/name.jpg';
  name = 'Samnoeun';

  onClick() {
    alert('Button clicked!');
  }

  sayHello() {
    alert(`Hello, ${this.name}!`);
  }
  
}
