import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule], // ✅ Add all needed modules here
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = signal('binding-lab');
  
}
