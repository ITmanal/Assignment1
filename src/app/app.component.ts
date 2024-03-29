import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WarningAlertCompnent } from './WarningAlert/WarningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WarningAlertCompnent,SuccessAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment1';
}
