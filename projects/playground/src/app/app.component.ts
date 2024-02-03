import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxTabbyGroup, NgxTabbyItem } from '../../../ngx-tabby/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxTabbyGroup, NgxTabbyItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground';
}
