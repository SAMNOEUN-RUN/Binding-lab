import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ must import RouterModule
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = signal('binding-lab');
}
